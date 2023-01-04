import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import FormReducer from "./FormReducer";

let RootReducer = combineReducers({
    listProductRedux : CartReducer,
    showFormRedux: FormReducer,
    
});
export {RootReducer};