import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { StyledDimLayer } from '../DimLayer.style';
import { MENU_CLOSE } from '../../../redux/reducers/common';
import { RootState } from '../../../types/redux/reducer';

function HeaderMenuDimlayer() {
  const dispatch = useDispatch();
  const runClose = useCallback(() => {
    dispatch({ type: MENU_CLOSE });
  }, []);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('is-active--nav');
    return () => {
      document.body.style.overflow = 'visible';
      document.body.classList.remove('is-active--nav');
    };
  }, []);
  return <StyledDimLayer onClick={runClose} />;
}

export default HeaderMenuDimlayer;
