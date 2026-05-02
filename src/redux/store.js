import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todosSlice";
import { filterReducer } from './filter/filterSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: "todos",
  version: 1 ,
  storage
}

const persistedReducer = persistReducer(persistConfig, todosReducer)

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store)
