import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { applyMiddleware, createStore } from "redux";


const middleware = [logger];
const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;