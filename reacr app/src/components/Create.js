import axios from 'axios';
import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom';
const Create = ()=>{
  const[name,setName]=useState("");
const[email,setEmail]=useState("");
const header={'Content-Type': 'application/json'};
const navigate = useNavigate();
//HandleSubmit for submit 
const HandleSubmit=(e)=>{
  e.preventDefault();
  axios.post(
    'https://68802da2f1dcae717b613b34.mockapi.io/user',
    {name:name,email:email},
    header
  )
  .then(()=>{
navigate('/read'); 
  })
//
}
    return (
<>
<form>
    <div className="row">
    <h4>Create</h4>
    <hr></hr>
    <br></br>
 
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} />
  </div>
 <div className="mb-3">
    <label   className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="email" onChange={(e)=>setEmail(e.target.value)} ></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Submit</button>
  <br/>
  {name}
  {email}
  </div>
</form>
</>
    )
}

export default Create
