import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/actions/userAction';

const Updated = () => {
  const state = useSelector((store) => store.updatedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      {state.isLoading ? (
        <p>Yükleniyor</p>
      ) : state.isError ? (
        <p>Hat oluştur</p>
      ) : (
        state.users.map((user) => <p>{user.name}</p>)
      )}
    </div>
  );
};

export default Updated;
