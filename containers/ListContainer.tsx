import * as React from 'react';
import List from '../components/List';

function ListContainer(data) {
  return <List {...data} />;
}

export default React.memo(ListContainer);
