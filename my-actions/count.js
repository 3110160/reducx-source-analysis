export const addCount = (num)=>{
  return{
    type:'ADD',
    num,
  }
}
export const decrCount = (num)=>{
  return{
    type:'DECR',
    num,
  }
}