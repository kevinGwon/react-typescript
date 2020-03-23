import React, { useCallback, useState } from 'react';
import Router from 'next/router';
import Header from '../components/Header';

function HeaderContainer() {
  const [searchActive, setSearchActive] = useState(false);
  const runSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    Router.push('/search');
  }, []);
  const runSearchActive = useCallback(() => {
    setSearchActive(!searchActive);
  }, [searchActive]);
  return (
    <Header
      searchActive={searchActive}
      runSubmit={runSubmit}
      runSearchActive={runSearchActive}
    />
  );
}

export default React.memo(HeaderContainer);
