import { createStore, combineReducers,} from 'redux';
import ordersReducer from '../Reducers/Orders/orders.reducer';

const rootReducer  = combineReducers({
    ordersReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);