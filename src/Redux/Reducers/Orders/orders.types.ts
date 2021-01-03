import {CardProps} from '../../../Components/Card/card.types';

export interface OrdersState{
    orders?: CardProps[]
}

export enum OrdersTypes{
    ORDERS_CHANGE_STATUS = "ORDERS_CHANGE_STATUS",
}

export type OrdersActions = 
    | {type: OrdersTypes.ORDERS_CHANGE_STATUS}

export enum OrdersCurrentState {
    ON_HOLD = "on_hold", 
    IN_PROGRESS= "in_progress",
    READY = "ready",
    DONE = "done",
    CANCEL = "cancel"
}
