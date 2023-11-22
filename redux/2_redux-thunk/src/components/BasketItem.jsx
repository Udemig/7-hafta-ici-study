import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../redux/actionTypes';
import {
  addToBasket,
  updateItem,
} from '../redux/actions/basketActions';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-2 p-4 bg-white d-flex justify-content-between align-items-center my-5 text-black">
      <div className="d-flex align-items-center gap-3">
        <img
          className="rounded-3"
          width={60}
          height={60}
          src={item.resim}
        />
        <h4>
          <span>{item.marka}</span>
          <span>{item.model}</span>
        </h4>
        <h4 className="text-success">{item.fiyat}₺</h4>
      </div>

      <div className="d-flex align-items-center gap-2">
        <h6>Miktar: {item.adet}</h6>

        <button
          onClick={() => dispatch(updateItem(item))}
          className="btn btn-sm btn-primary"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
