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
import { RootState } from '../types/redux/reducer';

function DetailContainer({ API, id, session, runLoadingSaga, runAddFavorite }) {
  const scrollToUp = useCallback(() => {
    window.scrollTo(0, 0);
    runLoadingSaga();
  }, []);
  return (
    <Detail
      API={API}
      scrollToUp={scrollToUp}
      account={id}
      session={session}
      runAddFavorite={runAddFavorite}
    />
  );
}

const mapStateToProps = (store: RootState) => ({
  id: store.user.id,
  session: store.user.session,
});
const mapDispatchToProps = dispatch => ({
  runLoadingSaga: () => {
    dispatch({
      type: LOADING_SAGA,
      dispatch: dispatch,
    });
  },
  runAddFavorite: (account, session, id) => {
    POST_FAVORITE(account, session, id).then(res => {
      console.log(res);
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
