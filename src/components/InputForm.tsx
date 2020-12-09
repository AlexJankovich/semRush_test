import React, {ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {initialStateType, setData, setFirstPay, setMarga, setPayPeriod, setPrice} from '../store/slices/Calc-slice';
import {RootStateType} from '../store/Store';


export const InputForm = () => {

  const dataFromLocalStorage = localStorage.getItem('data');
  const parsedDataFomStorage: initialStateType = dataFromLocalStorage && JSON.parse(dataFromLocalStorage);

  console.log(parsedDataFomStorage);

  const data = useSelector<RootStateType, initialStateType>(state => state.calc);
  const dicpatch = useDispatch();

  console.log(parsedDataFomStorage);

  useEffect(() => {
    if (!parsedDataFomStorage) return;
    else dicpatch(setData({data: parsedDataFomStorage}));
  }, [dicpatch]);


  const onChangePriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dicpatch(setPrice({price: +e.currentTarget.value}));
  };

  const onChangeFirstPayHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // dicpatch(setFirstPay({firstPay: +e.currentTarget.value}));
  };

  const onChangePayPeriodHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dicpatch(setPayPeriod({payPeriod: +e.currentTarget.value}));
  };

  const onChangeMargaHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dicpatch(setMarga({marga: +e.currentTarget.value}));
  };

  const chageFirstPayHandler = (value: number) => {
    dicpatch(setFirstPay({firstPay: value}));
  };

  const saveHandler = () => {
    localStorage.setItem('data', JSON.stringify(data));
  };

  const clearDataHandler = () => {
    const payload: initialStateType = {
      price: 0,
      firstPay: 0.15,
      payPeriod: 0,
      marga: 0
    };
    dicpatch(setData({data: payload}));

    localStorage.clear();
  };

  return (
    <div className='formWrapper'>

      <div className='inputWrapper'>
        <label>Стоимость недвижимости</label>
        <div className='input'>
          <input type="text" value={data.price} onChange={onChangePriceHandler}/>
          P
        </div>
      </div>

      <div className='inputWrapper'>
        <label htmlFor="">Первоначальный взнос</label>
        <div className='input'><input type="text" value={data.firstPay * data.price}
                                      onChange={onChangeFirstPayHandler}/>Р
        </div>
        <div className='firstPayWrapper'>
          <div
            onClick={() => chageFirstPayHandler(0.1)}
            className={0.10 === data.firstPay ? 'firstPayCurrent' : 'firstPay'}
          >
            10%
          </div>
          <div
            onClick={() => chageFirstPayHandler(0.15)}
            className={0.15 === data.firstPay ? 'firstPayCurrent' : 'firstPay'}
          >
            15%
          </div>
          <div
            onClick={() => chageFirstPayHandler(0.2)}
            className={0.2 === data.firstPay ? 'firstPayCurrent' : 'firstPay'}
          >
            20%
          </div>
          <div
            onClick={() => chageFirstPayHandler(0.25)}
            className={0.25 === data.firstPay ? 'firstPayCurrent' : 'firstPay'}
          >
            25%
          </div>
          <div
            onClick={() => chageFirstPayHandler(0.3)}
            className={0.3 === data.firstPay ? 'firstPayCurrent' : 'firstPay'}
          >
            30%
          </div>
        </div>
      </div>

      <div className='inputWrapper'>
        <label htmlFor="input">Срок кредита</label>
        <div className='input'>
          <input type="text" value={data.payPeriod} onChange={onChangePayPeriodHandler}/>
          Лет
        </div>
      </div>

      <div className='inputWrapper'>
        <label htmlFor="">Процентная ставка</label>
        <div className='input'>
          <input type="text" value={data.marga} onChange={onChangeMargaHandler}/>
          %
        </div>
      </div>

      <div className='buttonWrapper'>
        <button
          className='saveButton'
          onClick={saveHandler}
        >save
        </button>
        <button onClick={clearDataHandler}>clear</button>
      </div>
    </div>
  );
};
