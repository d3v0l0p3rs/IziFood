import { RouteComponentProps } from "react-router-dom"

export type ConditionalRouteType = {
  component: React.FC<RouteComponentProps>
  condition: () => boolean
  defaultRoute: string
}

export type RouteType = {
  component: React.FC<RouteComponentProps>
  [x: string]: any // TODO: Improve
}
