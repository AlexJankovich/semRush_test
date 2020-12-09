import React from 'react';
import {useSelector} from 'react-redux';
import {initialStateType} from '../store/slices/Calc-slice';
import {RootStateType} from '../store/Store';


export const InfoTable = () => {

  const data = useSelector<RootStateType, initialStateType>(state => state.calc);

  const creditBody = () => {
    return data.price - data.firstPay * data.price;
  };

  const mothPay = () => {
    const a = creditBody();
    const b = data.marga / 1200;
    return a * (b + b / (((1 + b) ** (data.payPeriod * 12)) - 1));
  };

  const howMuchMoney = () => {
    const a = mothPay() | 0;
    return 5 * a / 3;
  };

  const overPay = () => {
    const a = mothPay();
    return a * data.payPeriod * 12 - creditBody();
  };

  return (
    <div className='infoWrapper'>
      <div>
        <span>Ежемесячный платёж</span>
        <div>{mothPay() | 0}</div>
      </div>
      <div>
        <span>Необходимфй доход</span>
        <div>{howMuchMoney() | 0}</div>
      </div>
      <div>
        <span>Переплата</span>
        <div>{overPay() | 0}</div>
      </div>
      <div>
        <span>Тело кредита</span>
        <div>{creditBody() | 0}</div>
      </div>
    </div>
  );
};