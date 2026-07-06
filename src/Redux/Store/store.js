
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartreducer from "../Reducer/index"
import Product from "../../pages/Product";
import persistReducer from "redux-persist/es/persistReducer";
// import reduxPersistStorag from 'redux-persist/lib/storage'
import reduxPersistStorage  from "redux-persist/lib/storage"

const config ={
    key : "root",
    storage:reduxPersistStorage.default ?? reduxPersistStorage
}
 

const allReducers = combineReducers({
    cart:cartreducer,
})

const Reducers = persistReducer(config, allReducers)


const store =configureStore(
    {
        reducer: Reducers
                
            }



)
export default store