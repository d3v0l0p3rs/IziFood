import React from "react"
import "./styles.scss"
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
