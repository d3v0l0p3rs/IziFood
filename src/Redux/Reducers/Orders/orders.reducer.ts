import {OrdersState, OrdersActions} from './orders.types';

const initialState: OrdersState = {
    orders: [
        {
            product: "Papitas",
            client: "Andros",
            phone: "123456",
            cost: 1234,
            deliveryType: "tipo1",
            currentState: "in_progress"
          },
          {
            product: "Salchipapa",
            client: "Andros",
            phone: "123456",
            cost: 1234,
            deliveryType: "tipo1",
            currentState: "on_hold"
          },
          {
            product: "Hamburguesa",
            client: "Andros",
            phone: "123456",
            cost: 1234,
            deliveryType: "tipo1",
            currentState: "ready"
          },
    ],
}


export default function OrdersReducer(state: OrdersState = initialState, action: OrdersActions){
    switch(action.type){

      default: {
        return state;
      }
    }
}