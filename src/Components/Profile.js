import React, {useState, useEffect } from 'react'
import axios from 'axios';
function Profile() {
  const[user, setUser] = useState(
    {
      id : null , 
      name : '' , 
      email : '' , 
      avatar : '',
      role : '' , 
      password : ''
}
  );
    const getData = ()=>{
       const response= axios('https://api.escuelajs.co/api/v1/users/1');
    //    console.log(response);
       response.then((res)=>{
        console.log('api data' , res.data)
        setUser(res.data);
       })
       .catch((res)=>{
        console.log(res.message);
       })
    }
   useEffect(()=>{
    getData()
   },[]);
  //  console.log('data from state' , user)
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-3">
          <img src='https://replicate.delivery/pbxt/faifcbGhlTpMh0EzM8cYgL7GnJZvQX1CYUumIaVhc2KUDazQA/output.png' className="img-thumbnail rounded-circle" alt="User Avatar" />
        {/* https://replicate.delivery/pbxt/rH8sAsrq7kKsLZkY1nIgSbQBJqmnfOxIS0XZim20gimNEuZIA/output.png */}
       
          <img src='https://replicate.delivery/pbxt/rH8sAsrq7kKsLZkY1nIgSbQBJqmnfOxIS0XZim20gimNEuZIA/output.png' className="img-thumbnail rounded-circle" alt="User Avatar" />
        </div>
        <div className="col-sm-9">
          <h1>{user.name}</h1>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>ID:</strong> {user.id}</p>
        </div>
      </div>
    </div> 
  )
}

export default Profile
