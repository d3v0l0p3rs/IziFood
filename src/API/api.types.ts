export enum Entities {
  TABLE = "table/"
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