import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllUser() {
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    await axios.get('https://api.escuelajs.co/api/v1/users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">All Users Profile</h1>
      {users.length > 0 ? (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img src={user.avatar} className="img-thumbnail rounded-circle" alt="User Avatar" height='50' width='50' />
                </div>
                <div className="col-md-10">
                  <h5 className="mb-0">{user.name}</h5>
                  <p className="mb-0">{user.email}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default AllUser;