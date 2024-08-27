import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const params = useParams();

  const [userInput, setUserInput] = useState({
    firstName: "",
    age: "",
    email: "",
    mobile: "",
    password: "",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await axios.get(
      `https://66c74cf5732bf1b79fa61be6.mockapi.io/students/${params.id}`
    );

    setUserInput(userData.data);
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, age, email, mobile, password } = userInput;

    await axios.put(
      `https://66c74cf5732bf1b79fa61be6.mockapi.io/students/${params.id}`,
      {
        firstName,
        age,
        email,
        mobile,
        password,
      }
    );

    navigate("/");
  };

  return (
    <div className="userRegisterForm">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }} className="mb-5">
          Edit User
        </h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            name="firstName"
            value={userInput.firstName}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            name="age"
            value={userInput.age}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={userInput.email}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Mobile
          </label>
          <input
            type="number"
            class="form-control"
            name="mobile"
            value={userInput.mobile}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={userInput.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;
