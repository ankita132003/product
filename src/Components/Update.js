import React, {useState} from 'react'
import axios from 'axios';
function Update() {



const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('submitted')
    const id = name;
   const data={
    'email' : email,
    'name' : name,
    }
    updateData(id , data);
    // console.log(data)
  
}

const updateData = (id, data)=>{
    axios.put(`https://api.escuelajs.co/api/v1/users/1${id}`, data)
    .then((res)=>{
        console.log(res.data)
    }).catch((res)=>{
        console.log(res.message)
    })
}

const [name, setName] = useState();
const [email, setEmail] = useState();
  return (
    <div className='container'>
        <h4>update your profile</h4>
        <h5>email : {email} </h5>
        <h5>name : {name} </h5>
       
      <form onSubmit={handleSubmit}>
        <div className='row mb-2'>
            <div className='col-auto'>
                <label htmlFor='email'>email</label>
            </div>  
            <div className='col-auto'>
                <input type='email' id='email' onChange={(e)=>{
                    setEmail(e.target.value);
                }} />
            </div>
        </div>

        <div className='row'>
            <div className='col-auto'>
                <label htmlFor='name' name='name'>name</label>
            </div>  
            <div className='col-auto'>
                <input type ='text' id='name' onChange={(e)=>{
                    setName(e.target.value)
                }} />
            </div>
        </div>
        <button type ="submit" className='btn btn-primary mt-3'>update</button>
      </form>
    </div>
  )
}

export default Update
