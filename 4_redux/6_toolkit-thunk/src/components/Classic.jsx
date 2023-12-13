import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setError,
  setLoading,
  setUser,
} from '../redux/slices/userSlice';

const Classic = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.user);

  useEffect(() => {
    //1) loading  durumunu store'a aktar
    dispatch(setLoading());
    //2) istek at
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      // 3) başarılı olursa storore'a bildir
      .then((res) => dispatch(setUser(res.data)))
      // 4) başarısız olursa store'a bildir
      .catch(() => {
        dispatch(setError());
      });
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

export default Classic;
