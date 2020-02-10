import * as React from 'react';
import List from '../components/List';
import { useDispatch } from 'react-redux';

// API
import { API_LIST } from '../modules/api/list';

function ListContainer(data) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!data.isLoading) {
      API_LIST({ dispatch, data });
    }
  }, []);

  return <List {...data} />;
}

ListContainer.getInitialProps = async () => {
  return {};
};

export default React.memo(ListContainer);
