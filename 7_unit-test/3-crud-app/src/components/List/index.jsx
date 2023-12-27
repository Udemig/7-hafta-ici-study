const List = ({ users }) => {
  return (
    <table className="table my-4 table-dark table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>İsim</th>
          <th>Email</th>
          <th>Yaş</th>
        </tr>
      </thead>
      <tbody data-testid="body">
        {users.map((user, i) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
