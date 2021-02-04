import {CardProps} from "../../../Components/Card/card.types"

export interface OrdersState {
    orders: CardProps[]
    showAddOrderForm: boolean
}

export enum OrdersTypes {
    CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS",
    SET_ADD_ORDER_FORM_VISIBLE = "SET_ADD_ORDER_FORM_VISIBLE",
}

export type OrdersActions =
    | { type: OrdersTypes.CHANGE_ORDER_STATUS , payload: CardProps[] }
    | { type: OrdersTypes.SET_ADD_ORDER_FORM_VISIBLE, payload: boolean }

export enum OrdersCurrentState {
    ON_HOLD = "on_hold",
    IN_PROGRESS = "in_progress",
    READY = "ready",
    DONE = "done",
    CANCEL = "cancel",
}
