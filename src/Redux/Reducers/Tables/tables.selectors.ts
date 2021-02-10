import { TableProps } from "../../../Components/App/Components/Table/table.types"
import { rootState } from "../../Store"

export const tablesSelector = (state: rootState): TableProps[] => state.tablesReducer.tables