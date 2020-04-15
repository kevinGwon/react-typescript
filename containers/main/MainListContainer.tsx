import React, { useRef, useCallback, useEffect } from 'react';

// Components
import MainList from '../../components/main/MainList';

// Types
import { ListType } from '../../types/redux/list';

// Modules
import swiper from '../../modules/swiper';

function MainListContainer(props: { data: ListType[] }) {
  const $sectionBg = useRef();
  const runSwiper = useCallback(swiper, []);
  return <MainList {...props} $sectionBg={$sectionBg} runSwiper={runSwiper} />;
}

export default MainListContainer;
