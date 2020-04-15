import React, { useCallback, useRef, useMemo } from 'react';
import { connect } from 'react-redux';

// Components
import Detail from '../../components/detail/Detail';

// Modules
import { POST_FAVORITE } from '../../modules/api/detail';
import { GET_FAVORITE } from '../../modules/api/login';

// Styled
import { StyledLayout } from '../../styled/global/StyledLayout.style';

// Action
import {
  LOADING_ON,
  LOADING_OFF,
  LOADING_SAGA,
} from '../../redux/reducers/common';
import { USER_FAVORITE_SAGA } from '../../redux/reducers/user';

// Types
import { IndexType } from '../../types';
import { RootState } from '../../types/redux/reducer';
import { ListType } from '../../types/redux/list';

function DetailContainer(props) {
  const { runLoadingSaga } = props;
  const scrollToUp = useCallback(() => {
    window.scrollTo(0, 0);
    runLoadingSaga();
  }, []);
  return <Detail {...props} scrollToUp={scrollToUp} />;
}
const mapStateToProps = (store: RootState) => ({
  account: store.user.account,
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
  runAddFavorite: async (account, session, id, active) => {
    if (!account) {
      alert('로그인이 필요한 기능입니다.');
      return;
    }
    const data = {
      account,
      session,
      id,
      active,
    };
    dispatch({
      type: USER_FAVORITE_SAGA,
      data,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
