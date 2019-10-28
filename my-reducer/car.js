const car = (state = {}, action) => {
  switch (action.type) {
    case "BM":
      return { ...state, name: "宝马" };
    case "BC":
      return { ...state, name: "奔驰" };
    default:
      return state;
  }
};
export default car;
