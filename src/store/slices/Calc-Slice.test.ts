import {calcReducer, initialStateType, setData, setPrice, setFirstPay, setPayPeriod, setMarga} from './Calc-slice';


let startState: initialStateType = {
  price: 3,
  firstPay: 0.2,
  payPeriod: 5,
  marga: 10,
};

test('setData must return correct result', () => {

  const action = setData({data: startState});
  const endState = calcReducer(startState, action);

  expect(endState.price).toBe(3);
  expect(endState.firstPay).toBe(0.2);
  expect(endState.payPeriod).toBe(5);
  expect(endState.marga).toBe(10);

});

test('setPrice must return correct result', () => {

  const action = setPrice({price: startState.price});
  const endState = calcReducer(startState, action);

  expect(endState.price).toBe(3);

});

test('setFirstPay must return correct result', () => {

  const action = setFirstPay({firstPay:startState.firstPay});
  const endState = calcReducer(startState, action);

  expect(endState.firstPay).toBe(0.2);

});

test('setPayPeriod must return correct result', () => {

  const action = setPayPeriod({payPeriod:startState.payPeriod});
  const endState = calcReducer(startState, action);

  expect(endState.payPeriod).toBe(5);

});

test('setMarga must return correct result', () => {

  const action = setMarga({marga:startState.marga});
  const endState = calcReducer(startState, action);

  expect(endState.marga).toBe(10);

});
