import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin } from '../services/requests';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const login = async () => {
    try {
      const endpoint = '/auth';

      const { token, user } = await requestLogin(endpoint, { email, password });

      localStorage.setItem('user', JSON.stringify({ token, ...user }));
      setIsLogged(true);
    } catch (error) {
      setIsLogged(false);
    }
  };

  if (isLogged) return <Navigate to="/adm/settings" />;

  return (
    <form>
      <label htmlFor="email-input">
        Email:
        <input
          type="text"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input
          type="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </label>
      <button type="button" onClick={ () => login() }>
        Login
      </button>
    </form>
  );
};

export default Login;
