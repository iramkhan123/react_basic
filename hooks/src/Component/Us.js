import React ,{useState} from 'react'

function Us() {
  const [count,setCount]=useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default Us