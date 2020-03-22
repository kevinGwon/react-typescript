import React, { useRef, useCallback, useEffect } from 'react';
import List from '../components/main/MainList';
import { ListType } from '../types/redux/list';
import runSwiper from '../modules/swiper';

function ListContainer(props: { data: ListType[] }) {
  const $sectionBg = useRef();
  return <List {...props} $sectionBg={$sectionBg} runSwiper={runSwiper} />;
}

export default ListContainer;
