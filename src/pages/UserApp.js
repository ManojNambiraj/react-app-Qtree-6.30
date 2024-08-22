import axios from "axios";
import React, { useEffect, useState } from "react";

function UserApp() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let userData = await axios.get(
      "https://66c74cf5732bf1b79fa61be6.mockapi.io/students"
    );

    setUser(userData.data);
  };
  
  // Create     read      update     delete
  // POST       GET        PUT       DELETE

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default UserApp;
