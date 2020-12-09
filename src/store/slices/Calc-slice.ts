import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type initialStateType = {
  price:number
  firstPay:number
  payPeriod:number
  marga:number
}

const initialState:initialStateType = {
  price: 0,
  firstPay:0.15,
  payPeriod: 0,
  marga: 0,
};

const slice = createSlice({
  name: 'calcReducer',
  initialState: initialState,
  reducers: {
    setPrice(state, action: PayloadAction<{ price: number }>) {
      state.price = action.payload.price;
    },
    setFirstPay(state, action: PayloadAction<{ firstPay: number }>) {
      state.firstPay = action.payload.firstPay;
    },
    setPayPeriod(state, action: PayloadAction<{ payPeriod: number }>) {
      state.payPeriod = action.payload.payPeriod;
    },
    setMarga(state, action: PayloadAction<{ marga: number }>) {
      state.marga = action.payload.marga;
    },
    setData(state, action: PayloadAction<{ data: initialStateType }>){
      return {...action.payload.data}
    }
  }
});

export const calcReducer = slice.reducer;
export const {
  setFirstPay,
  setMarga,
  setPayPeriod,
  setPrice,
  setData} = slice.actions;