import { combineReducers } from "redux";
import { RegReducer } from "./CashReducer";

const rootReducers = combineReducers({
    reg:RegReducer
})

export default rootReducers