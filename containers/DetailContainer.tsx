import React, { useCallback } from 'react';
import { StyledLayout } from '../styled/global/StyledLayout.style';
import { ListType } from '../types/redux/list';
import Detail from '../components/Detail';

function DetailContainer({ API }: { API: any }) {
  const scrollToUp = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Detail API={API} scrollToUp={scrollToUp} />;
}

export default DetailContainer;
