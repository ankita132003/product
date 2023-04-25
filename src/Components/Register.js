import React, {useState} from "react";
import axios from 'axios'
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const data = {
      'name' : name,
      'email' : email,
      'password' : password,
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867",
    }
    console.log(data);
    
  axios.post(' https://api.escuelajs.co/api/v1/users/' , data)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((res)=>{
    console.log(res.message)
  })
};
const checkAvailable = () =>{
 const data = {
  'email' : email
 }
 axios.post('https://api.escuelajs.co/api/v1/users/is-available', data)
 .then((response)=>{
    console.log( 'api data ' , response.data.isAvailable)
    setEmailAvailable( response.data.isAvailable)
})
 .catch((response)=>{
  console.log(response.message)
 })
};

  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [emailAvailable, setEmailAvailable] = useState(true);

  return (
    <>
    <div className="container header mt-3 " >
    <h4 >Register</h4>

    <h5>name : {name}</h5>
    <h5>email : {email}</h5>
    <h5>password : {password}</h5>
    
      <form onSubmit={handleSubmit}>
      <div className="row ">
        <div className="col-auto">
          <label htmlFor="name" name="name">
            name
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="name" onChange={(e)=>{
                setName(e.target.value)
              }}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-auto">
          <label htmlFor="email">
           Email
          </label>
        </div>
        <div className="col-auto">
          <input
            type="email"
            id="email" onChange={(e)=>{
              setEmail(e.target.value)
            }}
             />
        </div>
        
        <div className="col-auto">
            <button type="button" onClick ={checkAvailable}> Availability</button>
        </div>
      </div>
      {emailAvailable? null : <h6>'email is already exist'</h6>}
      <div className="row mt-2">
        <div className="col-auto">
          <label htmlFor="password" >
            Password
          </label>
        </div>
        <div className="col-auto">
          <input
            type="password"
            id="password" onChange={(e)=>{
              setPassword(e.target.value)
            }}
             />
        </div>
      </div>
      <button className="btn btn-primary mt-3" type="submit">Register</button>
      </form>
    </div>
  
    </>
  );
};
export default Register;
