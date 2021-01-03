import {OrdersActions, OrdersTypes} from './orders.types';
import {CardProps} from '../../../Components/Card/card.types';

export function changeOrderStatus(orders: CardProps[]): OrdersActions{
    return {
        type: OrdersTypes.CHANGE_ORDER_STATUS, payload: orders
    }
}