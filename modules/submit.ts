import React from 'react';
import Router from 'next/router';

// Action
import { LOADING_SAGA } from '../redux/reducers/common';
import { SEARCH_QUERY, SEARCH_SAGA } from '../redux/reducers/search';

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
  // set Value
  dispatch({ type: SEARCH_QUERY, query: $input.value });
  // Searching
  dispatch({ type: SEARCH_SAGA });

  // Search 페이지로 이동
  Router.push('/search');

  // Search 비활성화
  setSearchActive && setSearchActive(false);
};
export default submit;
