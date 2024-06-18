import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function RandomNumber() {
    const randomNumber=useSelector((state:any)=>state.randomNumber)
    console.log(randomNumber);
    const dispatch=useDispatch();
    const handleRandom=()=>{
        dispatch({type:'get_number'});
    }
  return (
    <div>
        <p>Numbers:{JSON.stringify(randomNumber) }</p>
        <button onClick={handleRandom} >Generate random number</button>
    </div>
  )
}
