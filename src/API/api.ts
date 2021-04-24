import { Entities, Routes, Table } from "./api.types"

const env = "local"
const baseURL = { local: "http://127.0.0.1:8000/" }
const headers = { "Content-Type": "application/json" }

const url = (entity: Entities | Routes, id?: string) => `${baseURL[env]}${entity}${id ? id + "/" : ""}`

const call = async <T>(entity: Entities | Routes.LOGIN, options: T, id?: string) => {
  return fetch(url(entity, id), options)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch(console.error)
}

const get = async (entity: Entities | Routes, id?: string) => {
  const options = {
    method: "GET",
    headers: headers,
  }
  return call(entity, options, id)
}

const post_put = async <T>(entity: Entities | Routes, object: T, id?: string) => {
  const options = {
    method: id ? "PUT" : "POST",
    headers: headers,
    body: JSON.stringify(object),
  }
  return call(entity, options, id)
}

export default {
  loginX: async (user: string, pass: string): Promise<string> =>
    await post_put(Routes.LOGIN, { username: user, password: pass }),
  login: async (user: string, pass: string): Promise<string> => `${user}-${pass}`,
  getTable: async (id: string): Promise<Table> => await get(Entities.TABLE, id),
  getTables: async (): Promise<Table[]> => await get(Entities.TABLE),
  postTable: async (table: Table): Promise<Table[]> => await post_put(Entities.TABLE, table),
  putTable: async (id: string, table: Table): Promise<Table[]> => await post_put(Entities.TABLE, table, id),
}
