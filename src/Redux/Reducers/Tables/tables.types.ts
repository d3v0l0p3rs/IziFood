import { TableProps } from "../../../Components/Table/table.types"

export interface TablesState {
    tables: TableProps[]
}

export enum TablesTypes {
    CHANGE_TABLE_STATUS = "CHANGE_TABLE_STATUS",
}

export type TablesActions = {
    type: TablesTypes.CHANGE_TABLE_STATUS , payload: TableProps
}

export enum TablesCurrentState {
    AVAILABLE = "available",
    OCCUPIED = "occupied",
    RESERVED = "reserved",
}