const initial_state = {
    userData:{}
  };
  
  const logingReducer = (state = initial_state, action) => {
    switch (action.type) {
      case "LOGIN":
        return Object.assign({}, state, {
            userData: action.payload
        });
      default:
        return state;
    }
  };
  export default logingReducer;
  