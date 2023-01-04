import { applyMiddleware, compose, createStore } from "redux";
import { RootReducer } from "../Reducers/RootReducer";
import thunk from "redux-thunk";


const middleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
const storeRedux = createStore(
  RootReducer,
    middleware
);


export default storeRedux;