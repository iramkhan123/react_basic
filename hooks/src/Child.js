import React,{useContext} from 'react'

function Child({theme}) {
   // const theme=useContext(context);
  return (
    <div className={theme?"dark":"light"}>Child</div>
  )
}

export default Child;