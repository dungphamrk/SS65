import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const count= useSelector((state:any)=>state.counter); 
    console.log(count);
    const dispatch=useDispatch();
    const increaseCount=()=>({
        type : 'Increase',
    })
    const decreaseCount=()=>({
        type : 'Decrease',
    })
   
    
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=>{dispatch(increaseCount())}}>Tăng</button>
        <button onClick={()=>{dispatch(decreaseCount())}}>Giảm</button>
    </div>
  )
}
