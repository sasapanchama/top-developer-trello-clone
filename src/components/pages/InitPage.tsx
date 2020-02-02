import React, { FC, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { firebaseData, firebaseObject } from '../../firebase/data';
import Base from '../templates/Base';

type Props = { };

const ref = firebaseData.ref();

const getUser = () => new Promise<string>(resolve => {
  const user = localStorage.getItem('user') !== null
    ? localStorage.getItem('user')?.toString()
    : '';
  resolve(user);
});

const setUser = (user: string) => new Promise<string>(resolve => {
  if (user !== '') {
    resolve(user);
  } else {
    const pushKey: any = ref.child('users').push().key;
    const updateData: any = {};
    const initialData: any = { created_at: firebaseObject.ServerValue.TIMESTAMP };
    updateData[`/users/${pushKey}`] = initialData;
    localStorage.setItem('user', pushKey);
    ref.update(updateData);
    resolve(pushKey);
  }
});

const InitPage: FC<Props> = () => {
  const [stateRedirect, setStateRedirect] = useState<boolean>(false);
  const [stateUser, setStateUser] = useState<string>('');

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .then((user) => {
        setStateUser(user);
        setStateRedirect(true);
      })
  }, []);

  return (
    <Base>
    {
      stateRedirect
        ? <Redirect to={`/${stateUser}`} />
        : <p>initPage</p>
    }
    </Base>
  );
};

export default InitPage;