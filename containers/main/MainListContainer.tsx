import React, { useRef, useCallback, useEffect } from 'react';
import MainList from '../../components/main/MainList';
import { ListType } from '../../types/redux/list';
import runSwiper from '../../modules/swiper';

function MainListContainer(props: { data: ListType[] }) {
  const $sectionBg = useRef();
  return <MainList {...props} $sectionBg={$sectionBg} runSwiper={runSwiper} />;
}

export default MainListContainer;
