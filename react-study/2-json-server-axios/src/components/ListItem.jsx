import { types } from '../constants';
import { formatDate } from './../helpers';

const ListItem = ({ todo }) => {
  return (
    <li className="relative px-3 py-3 list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          defaultChecked={true}
          className="form-check-input me-2 shadow"
          type="checkbox"
        />

        <span className={`badge ${types[todo.status]?.color}`}>
          {types[todo.status]?.text}
        </span>
      </div>

      <span>{todo.title}</span>

      <div className="btn-group">
        <button className="btn btn-sm btn-primary">Edit</button>
        <button className="btn btn-sm btn-danger">Del</button>
      </div>

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
