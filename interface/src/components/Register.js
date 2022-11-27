import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../services/user.service";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");

  const register = async () => {
    const response = await UsersService.register({
      name,
      email,
      password,
      hobbies: [hobby],
      profilePicture: `${email}.png`,
    });

    if (response) {
      navigate("/");
    }
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
          <label className="form-label" for="registerName">
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
          <label className="form-label" for="registerEmail">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
          />
          <label
            className="form-label"
            for="registerPassword"
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="registerName" className="form-control" />
          <label
            className="form-label"
            for="registerName"
            onChange={(e) => setHobby(e.target.value)}
          >
            Main hobby
          </label>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            checked
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" for="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-3"
          onClick={() => register()}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
