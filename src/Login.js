import { useState } from "react";

function Lista() {
    let info = {name : "", password: ""}
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const saveInfo = () => {
        info.name = name
        info.password = password
        setName("")
        setPassword("")
    }

    return (
        <form id="form">
            <p>LOGIN</p>
            <div>
                <label>Username: </label>
                <input type="text" name="username" value={name} onInput={e => setName(e.target.value)}/>
            </div>
            <br/>
            <div>
                <label>Password: </label>
                <input type="password" name="password" value={password} onInput={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => saveInfo()}>Sign in</button>
            </div>
        </form>
    )
}

export default Lista;