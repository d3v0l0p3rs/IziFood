export interface TableProps {
  id: number
  bill: number
  state: TableState
}

export type TableState = "available" | "occupied" | "reserved"
