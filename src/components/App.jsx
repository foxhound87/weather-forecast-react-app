import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import SearchForm from '../forms/Search';
import Header from './Header';
import Content from './Content';

const App = () => (
  <div>
    <DevTools position={{ bottom: 0, right: '50px' }} />
    <Header form={SearchForm} />
    <Content items={SearchForm.items} />
  </div>
);

export default observer(App);
