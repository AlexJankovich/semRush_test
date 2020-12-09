import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { calcReducer } from './slices/Calc-slice';

const RootReducer = combineReducers({
 calc:calcReducer
})

export type RootStateType = ReturnType<typeof RootReducer>

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})