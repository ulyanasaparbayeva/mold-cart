import { combineReducers} from "redux";
import { langReducer} from "./langReducer";
import { cartReducer} from "./cartReducer";

const rootReducer = combineReducers({
  language:langReducer,
  cart: cartReducer
})

export {rootReducer}