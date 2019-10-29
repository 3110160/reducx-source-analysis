// createStore.js
// 创建一个store容器

// 1. 存储状态 state 🌲
// 2. 接受一个action 通过 dispatch 来更改这个状态树，并返回新的🌲
// 3. 可以注册状态🌲的观察者 watcher ，在状态改变后来触发回调函数
// 4. 可以通过 getState 方法来获取当前状态state🌲
/**
 * @param {Function} reducer 一个纯函数来通过action的类型来生产一个新的state🌲
 * @param {object} initialState 初始state
 * @param {Function} enhancer 一个增强函数，可以接收 middlewarers
 * @returns {Function dispatch(action)} 
 * @returns {Function subscribe(watcher)} 
 * @returns {Function getState()} 
 */
const createStore = (reducer, initialState, enhancer) => {

  // 如果 initialState 参数没有传入，enhancer作为第二个参数传入
  if(typeof initialState === 'function'&&!enhancer){
    enhancer = initialState
    initialState = undefined;
  }

  // 如果有 enhancer 函数传入则 返回一个增强后的store
  if(typeof enhancer === 'function'){
    return enhancer(createStore)(reducer, initialState,)
  }
  // 定义初始值
  let currentState = initialState || {};
  // 订阅者集合
  let subscribers = [];

  

  // 获取当前状态
  const getState = () => {
    return currentState;
  }

  // 分发一个action来更新当前状态
  const dispatch = (action) => {
    // 通过reducer来计算新的state
    currentState = reducer(currentState, action);
    // 触发注册过的观察者
    subscribers.forEach(watcher => {
      watcher(currentState)
    })
  }

  // 订阅state
  const subscribe = (watcher) => {
    subscribers.push(watcher)
  }

  return {
    dispatch,
    subscribe,
    getState,
  }
};

export default createStore;