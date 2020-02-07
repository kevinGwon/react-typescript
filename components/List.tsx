import * as React from 'react';
import { CategoryDefaultType } from '../redux/reducers/list';
import ListSwiper from './ListSwiper';

function List(data: CategoryDefaultType) {
  return data.category !== 'search' && <ListSwiper {...data} />;
}

export default List;
