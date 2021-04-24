import React from "react"
import { Route, Redirect } from "react-router-dom"
import api from "./api"
import { Routes } from "./routes"
import { ConditionalRouteType, RouteType } from "./auth.types"

const tokenKey = "TOKEN_KEY"

const ConditionalRoute = ({
  component: Component,
  condition: condition,
  defaultRoute: defaultRoute,
  ...rest
}: ConditionalRouteType) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        condition() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: defaultRoute,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export const authenticate = async (user: string, pass: string): Promise<void> =>
  localStorage.setItem(tokenKey, await api.login(user, pass))
export const isAuthenticated = (): boolean => !!localStorage.getItem(tokenKey)
export const LoginRoute = ({
  component: Component,
  ...rest
}: RouteType): JSX.Element => {
  return ConditionalRoute({
    component: Component,
    condition: () => !isAuthenticated(),
    defaultRoute: "/",
    ...rest,
  })
}
export const PrivateRoute = ({
  component: Component,
  ...rest
}: RouteType): JSX.Element => {
  return ConditionalRoute({
    component: Component,
    condition: isAuthenticated,
    defaultRoute: Routes.login,
    ...rest,
  })
}
