import { useEffect, useState } from 'react';
import Form from './components/Form';
import ListItem from './components/ListItem';
import axios from 'axios';
import Loading from './components/Loading';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    // axios ile get isteği
    axios
      .get('http://localhost:3000/todos')
      .then((res) => setTimeout(() => setTodos(res.data), 1000));
  }, []);

  return (
    <div className="container p-5">
      <h2 className="text-center">
        Server <span className="text-warning">CRUD</span>
      </h2>

      <Form />

      <ul className="list-group">
        {/* veriler henüz gelmediyse */}
        {!todos && <Loading />}

        {/* optional chainnig ?. */}
        {todos?.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
