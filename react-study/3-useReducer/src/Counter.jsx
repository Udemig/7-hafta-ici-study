import { useReducer, useState } from 'react';
import { reducer } from './reducers/counterReducer';

const initialState = {
  count: 0,
};

const Counter = () => {
  /*
     ! useReducer:
     * state yönetiminin useState ile birlikte
     * yönetmesi zor olduğu durumlarlada kullanılır
     ? bizden iki parametre ister
     * >> reducer: state'in nasıl değişeceğine karar verir (karar mekenizması)
     * >> initialState: tutucağımız verilerin ilk değeri
     ? bize dödürdükleri
     * >> state'in güncel hali
     * >> state'i güncellemek için verdiğimiz emirleri reducer'a aktaran fonksiyon
    */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="d-flex justify-content-between my-4 items-center">
      <button onClick={() => dispatch({ type: 'AZALT' })}>
        Azalt
      </button>

      <span className="lead fw-bold">{state.count}</span>

      <button onClick={() => dispatch({ type: 'ARTTIR' })}>
        Artı
      </button>
    </div>
  );
};

export default Counter;
