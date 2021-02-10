import React, { useState } from "react"
import { loginUser } from "./login"
import "./style.scss"

export default function Login({ setToken }: any) {
  const [username, setUserName] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const token = await loginUser({
      username,
      password,
    })
    setToken(token)
  }

  return(
    <div className="login-wrapper">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}