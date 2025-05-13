import { combineReducers } from "redux";
import { reducer as forms } from "redux-form";

import crudReducer from "./crudReducer";

const appReducer = combineReducers({
    form: forms,
    crud: crudReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default rootReducer;