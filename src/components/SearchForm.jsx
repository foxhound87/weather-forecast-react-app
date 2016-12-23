import React from 'react';
import cx from 'classnames';
import { observer } from 'mobx-react';
import { Creatable } from 'react-select';

const SearchForm = ({ form }) => (
  <div className={cx('center', 'mw7-ns')}>
    <Creatable
      multi
      allowCreate
      options={[]}
      resetValue={[]}
      openOnFocus={false}
      name={form.$('search').name}
      value={form.$('search').value}
      onChange={form.onChange}
      placeholder="Search Weather Forecast"
      noResultsText="Type a City..."
    />
  </div>
);

SearchForm.propTypes = {
  form: React.PropTypes.object,
};

export default observer(SearchForm);
