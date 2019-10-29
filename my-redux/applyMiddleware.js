// 如果需要在 dispatch 改变 state 之前需要做些其他事情
// 发异步API请求
// 输出 action 日志

/**
 * @function applyMiddleware
 * @param {Array} midddlewarers 
 * @returns
 * @description 
 */

const compose = (...arrFn) => {
  if (arrFn.length === 0) {
    return (arg) => (arg)
  } else if (arrFn.length === 1) {
    return arrFn[0]
  } else {
    return arrFn.reduce((a, b) => (...args) => b(a(...args)))
  }
}

const applyMiddleware = (...midddlewarers) => {
  // 返回一个新的增强后的 store
  return (createStore) => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState, enhancer);
    let dispatch = store.dispatch;
    // 此处我们需要把 原本的dispatch方法进行加强，
    // 让middlewarers一次执行完以后再把 dispatch 返回出去

    // 这里先把所有的 midddlewarers 先 传入 getState，dispatch 执行一次 返回一个接受 一个dispatch 的函数
    const chain = midddlewarers.map(midddleware => {
      return midddleware({
        getState: store.getState,
        dispatch: (action) => dispatch(action)
      })
    })
    // 组合所有的 chain 里面的函数 为 (dispatch)=>fn3(fn2(fn1(dispatch))) 的函数
    dispatch = compose(...chain)(store.dispatch)

    // 最终返回一个
    // function fn(dispatch){
    //   返回一个新的action
    //   return (action)=>{
    //     dispatch(action)
    //   }
    // }


    return {
      ...store,
      dispatch
    }
  }
}
export default applyMiddleware;

// 使用时
// const applymidddleware = applyMiddleware(mid1, mid2);
// const store = createStore(reducer, initialState, applymidddleware)