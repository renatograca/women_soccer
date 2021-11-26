import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label htmlFor="username-input">
        Usuário:
        <input
          type="text"
          value={ username }
          onChange={ ({ target: { value } }) => setUsername(value) }
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
      <button type="button">
        Login
      </button>
    </form>
  );
};

export default Login;
