import { createStore } from "redux";
import {combineReducers} from 'redux'
import { user } from "./reducers/bt1Reducer";
import { listUser } from "./reducers/bt2Reducer";
import { products } from "./reducers/bt3Reducer";
import { counter } from "./reducers/bt4Reducer";
import { randomNumber } from "./reducers/bt5Reducer";
import companyReducer from "./reducers/bt6Reducer";
import themeReducer from "./reducers/bt7Reducer";

 const reducers=combineReducers({user,listUser,products,counter,randomNumber,companyReducer,themeReducer});
export const store= createStore(reducers)