import {createStore } from "redux";
import user from "./app/reducers/userReducer";

export default createStore( user )