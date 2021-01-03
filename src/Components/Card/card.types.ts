export interface CardProps {
  product: string
  client: string
  phone: string
  cost: number
  deliveryType: 'tipo1' | 'tipo2'
  currentState: orderState
}

export type orderState = 'on_hold' | 'in_progress' | 'ready' | 'done' | 'cancel';

export type NextOrPrev = 'PREV' | 'NEXT';