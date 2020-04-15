import React from 'react';
import Router from 'next/router';

// Action
import { SEARCH_VALUE, LOADING_SAGA } from '../redux/reducers/common';

const submit = ({
  e,
  setSearchActive,
  dispatch,
}: {
  e: React.FormEvent;
  dispatch: any;
  setSearchActive?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const $form = e.currentTarget;
  const $input = $form.querySelector('input');
  e.preventDefault();

  // Validation
  if (!$input.value.length) {
    alert('검색어를 입력하세요.');
    return false;
  }

  // Loading
  dispatch({ type: LOADING_SAGA, dispatch: dispatch });
  // Dispatch
  dispatch({ type: SEARCH_VALUE, search: $input.value });

  // Search 페이지로 이동
  Router.push('/search');

  // Search 비활성화
  setSearchActive && setSearchActive(false);
};
export default submit;
