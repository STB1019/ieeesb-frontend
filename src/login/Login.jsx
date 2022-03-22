import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  /* const saveInfo = () => {
    info.name = name;
    info.password = password;
    setName("");
    setPassword("");
  }; */

  return (
    <form action="./post" method="post" id="form">
      <p>Accedi allo Student Branch IEEE</p>
      <br />

      <input
        className="inputs"
        type="text"
        name="username"
        placeholder="Username"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />

      <br />

      <input
        className="inputs"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      />

      <br />
      <div>
        <button id="btn1" type="submit">
          Sign in
        </button>
      </div>
    </form>
  );
}
