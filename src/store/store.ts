import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {usersReducer} from "../reducers/usersReducers";
import {profileReducer} from "../reducers/profileReducer";

const reducers = combineReducers({
    userPage: usersReducer,
    profilePage: profileReducer
})

export const store = legacy_createStore(reducers, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof reducers>
