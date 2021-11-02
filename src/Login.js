import { useState } from "react";
import './Login.css';

function Lista() {
  let info = { name: "", password: "" };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const saveInfo = () => {
    info.name = name;
    info.password = password;
    setName("");
    setPassword("");
  };

  return (
    <form id="form">
      <p>Accedi allo Student Branch IEEE</p>
      <br />

      <input
        class="inputs"
        type="text"
        name="username"
        placeholder="Username"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />

      <br />

      <input
        class="inputs"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      />

      <br />
      <div>
        <button id="btn1" onClick={() => saveInfo()}>
          Sign in
        </button>
      </div>
    </form>
  );
}

export default Lista;
