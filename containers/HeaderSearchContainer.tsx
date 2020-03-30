import React, { useState, useCallback } from 'react';
import HeaderSearch from '../components/common/header/HeaderSearch';
import Router from 'next/router';

function HeaderSearchContainer() {
  const [searchActive, setSearchActive] = useState(false);
  const runSubmit = useCallback((e: React.FormEvent) => {
    const $form = e.currentTarget;
    const $input = $form.querySelector('input');
    e.preventDefault();
    e.stopPropagation();
    Router.push('/search');
    setSearchActive(false);
    $input.value = '';
  }, []);
  const runSearchActive = useCallback(() => {
    setSearchActive(!searchActive);
  }, [searchActive]);
  return (
    <HeaderSearch
      searchActive={searchActive}
      runSubmit={runSubmit}
      runSearchActive={runSearchActive}
    />
  );
}

export default HeaderSearchContainer;
