function Lista() {
    return (
        <form id="form">
            <p>LOGIN</p>
            <div>
                <label>Username: </label>
                <input type="text" name="username"/>
            </div>
            <br/>
            <div>
                <label>Password: </label>
                <input type="password" name="password"/>
            </div>
        </form>
    )
}

export default Lista;