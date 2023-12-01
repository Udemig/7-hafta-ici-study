import { useDispatch, useSelector } from 'react-redux';
import {
  increase,
  decrease,
  reset,
} from '../redux/slices/counterSlice';
import { Button } from 'react-bootstrap';

const Counter = () => {
  const state = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-2">
      <Button onClick={() => dispatch(decrease())}>Azalt</Button>
      <p className="fw-bold fs-1 px-4">{state.count}</p>
      <button
        className="btn btn-success"
        onClick={() => dispatch(increase())}
      >
        Arttır
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(reset(0))}
      >
        Sıfırla
      </button>
    </div>
  );
};

export default Counter;
