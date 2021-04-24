export enum Entities {
  TABLE = "table/",
}

export enum Routes {
  LOGIN = "login/",
}

export type Table = {
  table_number: number
  bill?: string
  state: number
  created?: string
  updated?: string
  _id?: string
  _state?: string
}
