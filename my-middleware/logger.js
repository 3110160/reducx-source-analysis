// 输出日志的中间件
// next 就是下一个 dispatch
// 每个 midddlewarers 会在 applyMiddleware 内部传入 {getState,dispatch} 返回一个 只收 next的函数
const logger = ({
  getState,
  dispatch
}) => (next) => (action) => {
  console.log(`开始dispatch action:${action.type}`)
  next(action)
  console.log(`当前action:${action.type}执行完后state:${JSON.stringify(getState())}`)
}

export default logger;