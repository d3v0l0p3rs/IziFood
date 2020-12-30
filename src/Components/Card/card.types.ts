export interface Props {
  product: string
  client: string
  phone: string
  cost: number
  deliveryType: 'tipo1' | 'tipo2'
}

export type state = 'on_hold' | 'in_progress' | 'ready' | 'done' | 'cancel'

export type NextOrPrev = 'PREV' | 'NEXT'