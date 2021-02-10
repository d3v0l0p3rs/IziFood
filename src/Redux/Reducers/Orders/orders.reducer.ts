import {OrdersState, OrdersActions, OrdersTypes} from "./orders.types"

const initialState: OrdersState = {
  orders: [
    {
      id: 1,
      productList: ["Papitas"],
      client: "Andros",
      phone: "123456",
      note : "Extra salsa",
      address: "Carrera careverga",
      neighborhood : "Calima",
      cost: 1234,
      deliveryType: "tipo1",
      currentState: "in_progress",
    },
    {
      id: 2,
      productList: ["Salchipapa"],
      client: "Andros",
      phone: "123456",
      note : "Extra salsa",
      address: "Carrera careverga",
      neighborhood : "Calima",
      cost: 1234,
      deliveryType: "tipo1",
      currentState: "on_hold",
    },
    {
      id: 3,
      productList: ["Hamburguesa"],
      client: "Andros",
      phone: "123456",
      note: "adasdasd",
      address: "Carrera careverga",
      neighborhood : "Calima",
      cost: 1234,
      deliveryType: "tipo1",
      currentState: "on_hold",
    },
  ],
  showAddOrderForm: false,
}


export default function OrdersReducer(
  state: OrdersState = initialState,
  action: OrdersActions,
): OrdersState{
  switch(action.type){

  case OrdersTypes.CHANGE_ORDER_STATUS: {
    return {
      ...state,
      orders: action.payload,
    }
  }

  case OrdersTypes.SET_ADD_ORDER_FORM_VISIBLE: {
    return {
      ...state,
      showAddOrderForm: action.payload,
    }
  }

  case OrdersTypes.SET_ADD_ORDER: {
    return {
      ...state,
      orders: action.payload
    }
  }

  default: {
    return state
  }
  }
}