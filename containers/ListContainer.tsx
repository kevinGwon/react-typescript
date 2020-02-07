import * as React from 'react';
import List from '../components/List';
import { useDispatch } from 'react-redux';

// API
import { API_LIST } from '../modules/api/list';

// Type
import { CategoryDefaultType } from '../redux/reducers/list';

function ListContainer(data: CategoryDefaultType) {
  return <List {...data} />;
}

ListContainer.getInitialProps = async () => {
  // API_LIST();
  return {};
};

export default React.memo(ListContainer);
