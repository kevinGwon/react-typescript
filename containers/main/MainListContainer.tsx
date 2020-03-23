import React, { useRef, useCallback, useEffect } from 'react';
import MainList from '../../components/main/MainList';
import { ListType } from '../../types/redux/list';
import swiper from '../../modules/swiper';

function MainListContainer(props: { data: ListType[] }) {
  const $sectionBg = useRef();
  const runSwiper = useCallback(swiper, []);
  return <MainList {...props} $sectionBg={$sectionBg} runSwiper={runSwiper} />;
}

export default MainListContainer;
