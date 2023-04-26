import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
//   const [data, setUser] = useState();
const navigateAllProduct = () => {
    navigate('/');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const user ={ email, password};
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    axios.post("https://api.escuelajs.co/api/v1/auth/login", data)
      .then((res) => {
        console.log(res.data.access_token);
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        navigateAllProduct()
        })
      .catch((res) => {
        console.log(res.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>email : {email}</h5>
        <h5>password : {password}</h5>
        <div className="row mt-2">
          <div className="col-auto">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-auto">
            <input
              type="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-auto">
            <label htmlFor="password">Password</label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          login
        </button>
      </form>
    </div>
  );
}

export default LogIn;
