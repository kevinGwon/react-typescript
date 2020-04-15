import React, { useState, useCallback } from 'react';
import Router from 'next/router';

// Components
import HeaderSearch from '../../components/common/header/HeaderSearch';

function HeaderSearchContainer() {
  const [searchActive, setSearchActive] = useState(false);
  const runSubmit = useCallback((e: React.FormEvent) => {
    const $form = e.currentTarget;
    const $input = $form.querySelector('input');
    e.preventDefault();

    // Validation
    if (!$input.value.length) {
      alert('검색어를 입력하세요.');
      return false;
    }

    // Search 페이지로 이동
    Router.push('/search');

    // Search 비활성화
    setSearchActive(false);

    // Search 초기화
    $input.value = '';
  }, []);
  const runCloseSearch = useCallback(() => {
    setSearchActive(false);
  }, [searchActive]);
  const runCloseBlock = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
    },
    [searchActive],
  );
  const runSearchActive = useCallback(() => {
    let $searchInput: HTMLInputElement = null;
    setSearchActive(!searchActive);
    if (!searchActive) {
      setTimeout(() => {
        $searchInput = document.querySelector('#search');
        $searchInput.focus();
      }, 0);
    } else {
      $searchInput = null;
    }
  }, [searchActive]);
  return (
    <HeaderSearch
      searchActive={searchActive}
      runSubmit={runSubmit}
      runSearchActive={runSearchActive}
      runCloseSearch={runCloseSearch}
      runCloseBlock={runCloseBlock}
    />
  );
}

export default HeaderSearchContainer;
