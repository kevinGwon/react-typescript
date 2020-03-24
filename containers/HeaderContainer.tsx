import React, { useCallback, useState, useEffect } from 'react';
import Router from 'next/router';
import Header from '../components/Header';
import { LOGIN } from '../modules/api/login';
import Axios from 'axios';

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
  useEffect(() => {
    const token = localStorage.getItem('token');
    const session = localStorage.getItem('session');
    if (!token) {
      const login = async () => {
        try {
          await LOGIN();
        } catch (error) {
          console.log(error);
        }
      };
      login();
    }
    const test = async () => {
      try {
        const res = await Axios.get(
          `https://api.themoviedb.org/3/account?api_key=1e006c1e39b26bfadaa6f757bc1435cf&session_id=${session}`,
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, []);
  return (
    <Header
      searchActive={searchActive}
      runSubmit={runSubmit}
      runSearchActive={runSearchActive}
    />
  );
}

export default React.memo(HeaderContainer);
