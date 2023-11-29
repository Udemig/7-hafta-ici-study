import { useDispatch, useSelector } from 'react-redux';
import {
  increase,
  decrease,
  reset,
} from '../redux/slices/counterSlice';

const Counter = () => {
  const state = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-2">
      <button
        className="bg-danger"
        onClick={() => dispatch(decrease())}
      >
        Azalt
      </button>
      <p className="fw-bold fs-1 px-4">{state.count}</p>
      <button
        className="bg-success"
        onClick={() => dispatch(increase())}
      >
        Arttır
      </button>
      <button
        className="bg-secondary"
        onClick={() => dispatch(reset(0))}
      >
        Sıfırla
      </button>
    </div>
  );
};

export default Counter;
