const count = (state = { count: 1 }, action={}) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + (action.num || 0) };
    case "DECR":
      return { ...state, count: state.count - (action.num || 0) };
    default:
      return state;
  }
};
export default count;
