import React, { useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import { StyledLayout } from '../styled/global/StyledLayout.style';
import { ListType } from '../types/redux/list';
import Detail from '../components/Detail';
import {
  LOADING_ON,
  LOADING_OFF,
  LOADING_SAGA,
} from '../redux/reducers/common';
import { IndexType } from '../types';

function DetailContainer({
  API,
  runLoadingSaga,
  loadingOff,
}: {
  API: IndexType;
  runLoadingSaga: () => void;
  loadingOff: () => void;
}) {
  const scrollToUp = useCallback(() => {
    window.scrollTo(0, 0);
    runLoadingSaga();
  }, []);
  return <Detail API={API} scrollToUp={scrollToUp} />;
}

export default connect(
  store => ({}),
  dispatch => ({
    runLoadingSaga: () => {
      dispatch({
        type: LOADING_SAGA,
        dispatch: dispatch,
      });
    },
  }),
)(DetailContainer);
