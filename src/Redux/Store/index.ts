import { createStore, combineReducers} from "redux"
import ordersReducer from "../Reducers/Orders/orders.reducer"
import tablesReducer from "../Reducers/Tables/tables.reducer"

const rootReducer  = combineReducers({
  ordersReducer,
  tablesReducer,
})

export type rootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer)