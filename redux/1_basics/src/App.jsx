import { v4 } from 'uuid';
import AddForm from './components/AddForm';
import ListTodos from './components/ListTodos';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTodos } from './redux/actions/todoActions';

axios.defaults.baseURL = 'http://localhost:4000/';

const App = () => {
  const dispatch = useDispatch();

  // veritabanındaki todoları al ve store'e aktar
  useEffect(() => {
    axios.get('/todos').then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div className="container d-flex flex-column gap-5 my-5">
      <h2 className="text-center">Redux</h2>

      <AddForm />

      <ListTodos />
    </div>
  );
};

export default App;
