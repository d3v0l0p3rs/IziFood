import React from "react"
import "./styles.scss"
import Deliveries from "./Screens/Deliveries"
import Tables from "./Screens/Tables"
import Login from "./Screens/Login"
import { isAuthenticated, LoginRoute, PrivateRoute } from "../../API/auth"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { Routes } from "../../API/routes"

export default function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <LoginRoute path={Routes.login} component={Login} />
          <PrivateRoute path={Routes.deliveries} component={Deliveries} />
          <PrivateRoute path={Routes.tables} component={Tables} />
          <Route path="/" component={() => (<>
            <div><Link to={Routes.login}>LOGIN</Link> Can access? {!isAuthenticated() ? "Yes" : "No"}</div>
            <div><Link to={Routes.deliveries}>DELIVERIES</Link> Can access? {isAuthenticated() ? "Yes" : "No"}</div>
            <div><Link to={Routes.tables}>TABLES</Link> Can access? {isAuthenticated() ? "Yes" : "No"}</div>
          </>)} />
        </Switch>
      </Router>
    </div>
  )
}
