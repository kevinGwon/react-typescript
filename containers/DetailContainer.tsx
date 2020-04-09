import React, { useCallback, useRef, useMemo } from 'react';
import { connect } from 'react-redux';
import { StyledLayout } from '../styled/global/StyledLayout.style';
import { ListType } from '../types/redux/list';
import Detail from '../components/common/Detail';
import {
  LOADING_ON,
  LOADING_OFF,
  LOADING_SAGA,
} from '../redux/reducers/common';
import { IndexType } from '../types';
import { POST_FAVORITE } from '../modules/api/detail';
import { GET_FAVORITE } from '../modules/api/login';
import { RootState } from '../types/redux/reducer';
import { USER_FAVORITE_SAGA } from '../redux/reducers/user';

function DetailContainer(props) {
  const { runLoadingSaga } = props;
  const scrollToUp = useCallback(() => {
    window.scrollTo(0, 0);
    runLoadingSaga();
  }, []);
  return <Detail {...props} scrollToUp={scrollToUp} />;
}
const mapStateToProps = (store: RootState) => ({
  account: store.user.id,
  session: store.user.session,
  favorite: store.user.favorite,
});
const mapDispatchToProps = dispatch => ({
  runLoadingSaga: () => {
    dispatch({
      type: LOADING_SAGA,
      dispatch: dispatch,
    });
  },
  runAddFavorite: async (account, session, id) => {
    const data = {
      account,
      session,
      id,
    };
    dispatch({
      type: USER_FAVORITE_SAGA,
      data,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
