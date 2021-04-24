import { TablesActions, TablesTypes } from "./tables.types"
import { TableProps } from "../../../Components/App/Components/Table/table.types"

export function changeTableStatus(table: TableProps): TablesActions {
  return {
    type: TablesTypes.CHANGE_TABLE_STATUS,
    payload: table,
  }
}
