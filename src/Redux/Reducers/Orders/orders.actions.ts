import {OrdersActions, OrdersTypes} from './orders.types';

export function test(): OrdersActions{
    return {
        type: OrdersTypes.ORDERS_CHANGE_STATUS
    }
}