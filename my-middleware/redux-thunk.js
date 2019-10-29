// redux-thunk 这个库最主要的作用就是把传入的 action 
// 如果是一个function 就把 dispatch,和getState 作为参数传入

const thunkMiddleware = (args) => {
  return ({
    getState,
    dispatch
  }) => (next) => (action) => {
    // 如果action是函数
    if (typeof action === 'function') {
      console.log('thunk',action)
      action(dispatch, getState, args)
    } else {
      next(action)
    }
  }
}

const thunk = thunkMiddleware();

export default thunk;

// 这样就可以在 action 里面写异步调用 api 的方法了
// const addFavor = (id) => {
//   return function (dispatch, getState) {
//     reqFavor({id: id}).then(res => { 
//       dispatch({
//         type: "FAVOR",
//         id:id
//       })
//     })
//   }
// }

// // component
// dispatch(addFavor(id))