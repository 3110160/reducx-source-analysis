/**
 * @function combineReducers
 * @param {object} allReducers {a:a,b:b} 将所有的单个reducer 放在一个对象中
 * @returns {Function} reducer 最终返回单个reduce
 * @description 合并所以单个reducer为一个
 */
const combineReducers = allReducers => {
  // 遍历所有的reducer并一次将其执行
  const currentState = {};
  return (state, action) => {
    Object.keys(allReducers).forEach(key => {
      // 取出当前的reducer
      const currentReducer = allReducers[key];
      // 把当前ruducer 执行后的值全部的重新组合成一个新的state树，其key和 reducer的key一样
      currentState[key] = currentReducer(state[key], action);
    });
    // 最后把组合后的state🌲返回
    return currentState;
  };
};

export default combineReducers;
