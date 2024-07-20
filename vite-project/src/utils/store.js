import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Productreducer from '../slices/productSlices';
import Authreducer from "../slices/authSlices"

const rootReducer = combineReducers({
  ProductState:Productreducer,
  authState:Authreducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
