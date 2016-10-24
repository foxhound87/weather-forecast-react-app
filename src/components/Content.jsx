import React from 'react';
import { observer } from 'mobx-react';
import Item from './Item';

const Content = ({ items }) => (
  <div className="pt5 pt6-ns mw9 center ph3-ns">
    <div className="cf ph2-ns ph6-x">
      {items.map(item =>
        <div className="fl w-100 w-third-ns pa2" key={item.id}>
          <div className="br1 shadow-6 bg-white">
            <Item data={item.data} />
          </div>
        </div>
      )}
    </div>
  </div>
);

Content.propTypes = {
  items: React.PropTypes.object,
};


export default observer(Content);
