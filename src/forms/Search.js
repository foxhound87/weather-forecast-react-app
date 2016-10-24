import MobxReactForm from 'mobx-react-form';
import { observable, action } from 'mobx';
import _ from 'lodash';
import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.api.url,
  params: { APPID: config.api.key },
});

let current = [];

const initial = [{
  value: 'lisbon',
  label: 'Lisbon',
}, {
  value: 'paris',
  label: 'Paris',
}, {
  value: 'los angeles',
  label: 'Los Angeles',
}];

class SearchForm extends MobxReactForm {

  @observable items = [];

  onInit(form) {
    // set initial values to the search field
    form.$('search').set('value', initial);

    // map initial values
    const $values = _.map(initial, 'value');

    // get data for initial values
    form.load($values, form);
  }

  @action
  call(val, form) {
    const params = { q: val, units: 'metric', type: 'like' };

    api.get('/weather', { params })
      .then(action(json => form.items.push({ id: val, data: json.data })))
      .catch(err => console.error(err)); // eslint-disable-line
  }

  onChange(values, form) {
    form.$('search').sync(values);

    // parse values from select input
    const $values = _.chain(values)
      .mapValues('value')
      .values()
      .value();

    // get data for selected values
    form.load($values, form);
  }

  @action
  load(values, form) {
    // get only new ones (omit already called)
    const diff = _.difference(values, current);

    // assign all current values
    current = values;

    // call api only for new values
    diff.map(val => form.call(val, form));

    // remove unwanted items
    _.remove(form.items, item => !_.includes(current, item.id));
  }
}

export default new SearchForm({ fields: ['search'] });
