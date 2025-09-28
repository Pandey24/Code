import React, { Component } from 'react'
import Child from './Child'
import MyContext from './MyContext';
import Child2 from './Child2';
class Parent extends Component
{
render(){
const message = "Hello from Parent!";
  return (
   //<Child name="Suraj Pandey" dob="05-06-1991"></Child>
       // <Child text={message} />
       <MyContext.Provider value={message}>
        //<Child></Child>
         <Child2></Child2>
       </MyContext.Provider>
  )
}
}


export default Parent