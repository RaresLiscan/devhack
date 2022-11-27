import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../services/user.service";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await UsersService.login(email, password);
    if (response.status === "OK") {
      navigate("/");
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "150px", backgroundColor: "#fafafa", padding: 20 }}
    >
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form>
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary btn-block mb-4"
          onClick={login}
        >
          Sign in
        </button>

        <div class="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
