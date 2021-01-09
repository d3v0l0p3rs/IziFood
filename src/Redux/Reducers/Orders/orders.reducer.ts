import {OrdersState, OrdersActions, OrdersTypes} from './orders.types';

const initialState: OrdersState = {
    orders: [
        { 
            id: 1,
            product: "Papitas",
            client: "Andros",
            phone: "123456",
            cost: 1234,
            deliveryType: "tipo1",
            currentState: "in_progress"
          },
          {
            id: 2,
            product: "Salchipapa",
            client: "Andros",
            phone: "123456",
            cost: 1234,
            deliveryType: "tipo1",
            currentState: "on_hold"
          },
          {
            id: 3,
            product: "Hamburguesa",
            client: "Andros",
            phone: "123456",
            cost: 1234,
            deliveryType: "tipo1",
            currentState: "ready"
          },
    ],
    showAddOrderForm: false
}


export default function OrdersReducer(state: OrdersState = initialState, action: OrdersActions){
    switch(action.type){

      case OrdersTypes.CHANGE_ORDER_STATUS: {
        return {
          ...state,
          orders: action.payload
        }
      }

      case OrdersTypes.SET_ADD_ORDER_FORM_VISIBLE: {
        return {
          ...state,
          showAddOrderForm: action.payload
        }
      }
      

      default: {
        return state;
      }
    }
}