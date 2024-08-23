import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
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
      <Link to={"/create"} className="btn btn-primary m-3">
        Create User
      </Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
            
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
                <td>
                    <button className="btn btn-success btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
