import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { USER_INFO } from '../redux/reducers/user';
import firebase from '../firebase';
import 'firebase/auth';

function HeaderContainer() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const [searchActive, setSearchActive] = useState(false);
  const onLogin = useCallback(
    e => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          dispatch({
            type: USER_INFO,
            name: res.user.displayName,
            email: res.user.email,
            uid: res.user.uid,
          });
        })
        .catch(error => {
          alert(error);
        });
    },
    [firebase],
  );
  const runSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
