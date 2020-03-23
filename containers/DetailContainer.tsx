import React, { useCallback } from 'react';
import { StyledLayout } from '../styled/global/StyledLayout.style';
import Detail from '../components/Detail';
import { ListType } from '../types/redux/list';

function DetailContainer({ API }: { API: ListType }) {
  const scrollToUp = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Detail API={API} scrollToUp={scrollToUp} />;
}

export default DetailContainer;
