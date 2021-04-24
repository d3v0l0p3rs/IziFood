import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { authenticate } from "../../../../API/auth"
import "./style.scss"

export default function Login(): JSX.Element {
  const [username, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const history = useHistory()

  const login = async () => {
    authenticate(username, password).then(() => history.push("/"))
  }

  return (
    <div className="login-wrapper">
      <h1>Iniciar sesión</h1>
      <label>
        <p>Username</p>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}
