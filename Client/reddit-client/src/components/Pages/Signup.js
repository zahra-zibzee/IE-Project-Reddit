import React, { useState } from "react";
import image from "./../../assets/media/signup.jpg";
import { Link, withRouter } from "react-router-dom";
import PasswordField from "../Layouts/PasswordField";

const Signup = ({ history }) => {
  const userError = "";
  const passError = "";
  const emailError = "";

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getPassword = (pass) => setPassword(pass);

  document.body.style.backgroundColor = "white";

  const register = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    };

    fetch("http://localhost:3000/users/signup", requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText);
          console.log(response.response);
        }
        return response.json();
      })
      .then(
        (data) => {
          localStorage.setItem("token", data.token);
          history.push({
            pathname: "/",
            state: { user: data.user },
          });
        }
      )
  };

  return (
    <div className="container">
      <div className="body body-signup d-md-flex align-items-center justify-content-between">
        <div className="box-1 mt-md-0 mt-5">
          <img src={image} />
        </div>
        <div className="box-2 d-flex flex-column h-100">
          <div className="mt-4">
            <h1 className="mb-1 h-1">Signup</h1>

            <form>
              <fieldset className="login-fieldset">
                <input
                  id="privacy"
                  type="checkbox"
                  name="privacy"
                  className=""
                />
                {" By continuing, you agree to our "}
                <a href="https://www.redditinc.com/policies/user-agreement">
                  {"User Agreement "}
                </a>
                {"and "}
                <a href="https://www.redditinc.com/policies/privacy-policy">
                  Privacy Policy
                </a>
                .
              </fieldset>
              <fieldset className="login-fieldset">
                <label htmlFor="loginEmail">Email</label>
                <input
                  id="loginEmail"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-md"
                  data-empty="true"
                />
                {emailError && <p className="error">{emailError}</p>}
              </fieldset>
              <fieldset className="login-fieldset">
                <label htmlFor="loginUsername">Username</label>
                <input
                  id="loginUsername"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control form-control-md"
                  data-empty="true"
                />
                {userError && <p className="error">{userError}</p>}
              </fieldset>

              <fieldset className="login-fieldset">
                <PasswordField getPassowrd={getPassword} />
                {passError && <p className="error">{passError}</p>}
              </fieldset>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => register()}
              >
                Register
              </button>

              <div>
                {"Already a Redditor? "}
                <Link className="login-link" to="/login">
                  LOG IN
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signup);
