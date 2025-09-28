import React, { useContext } from 'react'
import MyContext from './MyContext'

function Child2() {
    const contextvalue=useContext(MyContext);
  return (
    <div>
        Child2
        <p>{contextvalue}</p>

    </div>
    
  )
}

export default Child2