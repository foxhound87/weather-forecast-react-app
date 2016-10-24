import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';
import SearchForm from './SearchForm';
import style from '../styles/header.css';

const Header = ({ form }) => (
  <header className={cx('fixed', 'w-100', 'z-9999', 'pa2-ns', style.header)}>
    <SearchForm form={form} />
  </header>
);

Header.propTypes = {
  form: React.PropTypes.object,
};

export default observer(Header);
