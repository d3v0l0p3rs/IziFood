import { createSelector } from 'reselect';
import { rootState } from '../../Store';
import {OrdersCurrentState} from './orders.types';

export const ordersSelector = (state: rootState) => state.ordersReducer.orders;

export const filterPendingOrders = createSelector(
    [ordersSelector],
    (orders) => {   
        return orders?.filter(order => order.currentState === OrdersCurrentState.ON_HOLD);
    });

export const filterCookingOrders = createSelector(
    [ordersSelector],
    (orders) => {
         return orders?.filter(order =>{ return order.currentState === OrdersCurrentState.IN_PROGRESS }); 
    });

export const filterReadyOrders = createSelector(
    [ordersSelector],
    (orders) => {
        return orders?.filter(order => order.currentState === OrdersCurrentState.READY); 
    });