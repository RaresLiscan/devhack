import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../services/user.service";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const response = await UsersService.register({
      name,
      email,
      password,
      hobbies: [hobby],
      profilePicture: `${email}.png`,
    });
    console.log("response: ", response);

    // if (response) {
    //   navigate("/");
    // }
  };
  return (
    <div className="container" style={{ marginTop: 150 }}>
      <form>
        <h1 style={{ textAlign: "center" }}>Register</h1>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label" htmlFor="registerName">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="registerHobby" className="form-control" />
          <label
            className="form-label"
            htmlFor="registerHobby"
            onChange={(e) => setHobby(e.target.value)}
          >
            Main hobby
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-3"
          onClick={(e) => register(e)}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
