export interface CardProps {
  id: number
  product: string
  client: string
  phone: string
  cost: number
  deliveryType: 'tipo1' | 'tipo2'
  currentState: OrderState
}

export type OrderState = 'on_hold' | 'in_progress' | 'ready' | 'done' | 'cancel';