export interface CardProps {
  id: number
  productList: string[]
  note? : string
  client: string
  phone: string
  address: string
  neighborhood : string
  cost: number
  deliveryType: "tipo1" | "tipo2"
  currentState: OrderState
}

export type OrderState = "on_hold" | "in_progress" | "ready" | "done" | "cancel";