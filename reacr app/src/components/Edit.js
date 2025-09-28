import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const Edit = ()=>{
    const loc=useLocation();
    const parm=new URLSearchParams(loc.search);
    const parmId=parm.get('id');
    const [data,setData]=useState([]);

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const header={'Content-Type': 'application/json'};
const navigate = useNavigate();

    function getdata(){
        axios.get(`https://68802da2f1dcae717b613b34.mockapi.io/user/${parmId}`)
        .then((res)=>{
            console.log(res.data);
            //setData(res.data);
           setName(res.data.name);
            setEmail(res.data.email);
        })
    };
  
useEffect(() => {
  
  return () => {
   getdata();
  }
}, [])
//HandleSubmit for update 
const HandleSubmit=(e)=>{
  e.preventDefault();
  axios.put(
    `https://68802da2f1dcae717b613b34.mockapi.io/user/${parmId}`,
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
    <h4>Edit</h4>
    <hr></hr>
    <br></br>
 
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" id="name" value={name}  onChange={(e)=>setName(e.target.value)} />
  </div>
 <div className="mb-3">
    <label   className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={email}  aria-describedby="email" onChange={(e)=>setEmail(e.target.value)} ></input>
  
  </div>
  <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Update</button>
  <br/>
  {name}
  {email}
  </div>
</form>
</>
    )
}

export default Edit
