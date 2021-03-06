import React, { useCallback } from 'react';
import { connect } from 'react-redux';

// Components
import MainSwiper from '../../components/main/MainSwiper';

// Types
import { ListType } from '../../types/redux/list';

// Action
import {
  LOADING_ON,
  LOADING_OFF,
  LOADING_SAGA,
} from '../../redux/reducers/common';

function MainSwiperContainer(props) {
  const { runLoadingSaga } = props;
  const runLoading = useCallback(() => {
    runLoadingSaga();
  }, []);
  return <MainSwiper {...props} runLoading={runLoading} />;
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
)(MainSwiperContainer);
