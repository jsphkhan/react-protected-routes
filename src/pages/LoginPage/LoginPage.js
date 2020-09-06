import React from 'react';
import auth from '../../auth';

import { useHistory } from 'react-router';

const LoginPage = () => {
  const history = useHistory();
  const handleLogin = () => {
    auth.login(() => {
      //navigate to home page
      history.push('/home');
      console.log(auth);
    });
  }
  return (
    <>
      <h1>Login Page</h1>
      <p>Protected Route example with React Router</p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default LoginPage;