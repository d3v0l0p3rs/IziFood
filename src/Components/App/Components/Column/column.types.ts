import { CardProps } from "../Card/card.types"

export interface ColumnProps {
  columnType: "pending" | "cooking" | "ready"
  data: CardProps[]
}

export interface Filter {
  name: keyof CardProps
  order: Order
}

export enum Order {
  ASC = 1,
  DESC = -1,
}
