import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Child = ({ name,dob }) => {
  const {Id}=useParams();
  //var count=0;
   const [count, setCount] = useState(0);
  const increament=()=>{
   // count++;
   setCount(prev => prev + 1);
    console.log(count+1);
  }
  return (
    <>
    
    <p> My name is {name} </p>
    <p> My dob is {dob} </p>

<p>  {Id} </p>
<p>{count}</p>

<button onClick={increament}>Click me</button>
    </>
  )
};


export default Child;