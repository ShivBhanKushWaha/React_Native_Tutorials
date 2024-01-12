import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import  SagaMiddlewareOptions  from "redux-saga";
import SagaData from "../SAGA";

const sagaMiddleWare = SagaMiddlewareOptions()
const store = configureStore({
    reducer:rootReducer,
    middleware: () => [sagaMiddleWare]
});

sagaMiddleWare.run(SagaData)
export default store