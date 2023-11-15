const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return state;

    case "LOGOUT_USER":
      return state;

    default:
      return state;
  }
};

export default userReducer;
