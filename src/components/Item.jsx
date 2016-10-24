import React from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';
import moment from 'moment';
import cx from 'classnames';
import style from '../styles/item.css';

const Item = ({ data }) => (
  <div className="dt dt--fixed pt1 pb2 animated fadeIn">
    <div className="dtc-sm dtc-l tl tc-m pl3 pl0-m pt2 v-top">
      <div className={cx('pt1', style.city)}>{data.name}</div>
      <div className={cx('pt1', style.date)}>
        {moment(new Date(), 'DD-MM-YYYY').format('MMMM Do')}
      </div>
    </div>
    <div className="dtc-sm dtc-l tc v-top">
      <div className="pt1 pt2-m">
        <span className={cx('pl3', style.temp)}>{_.round(data.main.temp)} <sup>°C</sup></span>
      </div>
      <div className={cx(style.type)}>{data.weather[0].main}</div>
    </div>
    <div className="dtc-sm dtc-l tr tc-m pr3 pr0-m pt3 v-top">
      <div className={cx(style.hum)}>Humidity: <span>{data.main.humidity}%</span></div>
      <div className={cx('pt2', 'pb2', style.wind)}>Wind: <span>{data.wind.speed} km/h</span></div>
    </div>
  </div>
);

Item.propTypes = {
  data: React.PropTypes.object,
};

export default observer(Item);
