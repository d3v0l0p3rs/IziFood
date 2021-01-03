import {CardProps} from '../../../Components/Card/card.types';

export interface OrdersState{
    orders: CardProps[]
}

export enum OrdersTypes{
    CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS",
}

export type OrdersActions = 
    | {type: OrdersTypes.CHANGE_ORDER_STATUS , payload: CardProps[]}

export enum OrdersCurrentState {
    ON_HOLD = "on_hold", 
    IN_PROGRESS= "in_progress",
    READY = "ready",
    DONE = "done",
    CANCEL = "cancel"
}
