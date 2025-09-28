import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
   const [data,setData]=useState([]);
    function getdata(){
        axios.get('https://68802da2f1dcae717b613b34.mockapi.io/user')
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    };
const HandleDelete=(id)=>{
 axios.delete(`https://68802da2f1dcae717b613b34.mockapi.io/user/${id}`)
 .then(()=>{
    getdata();
 })
}
useEffect(() => {
  
  return () => {
   getdata();
  }
}, [])

//getdata();
    
  return (
   
    <div>
         <h4>Read</h4>
    <hr></hr>
    <br></br>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
    <tbody>
{
    data.map((res)=>{
return(
    <>
    <tr>
      <th scope="row">{res.id}</th>
      <td>{res.name}</td>
      <td>{res.email}</td>
      <td>
       <Link to={'/edit?id='+res.id}>
        <button className='btn-success' >Edit</button>

       </Link>
        <button className='btn-danger' onClick={()=>HandleDelete(res.id)} >Delete</button>

      </td>
    </tr>
    </>
)
    })
}
    
   
  </tbody>
</table>

    </div>
  )
}

export default Read