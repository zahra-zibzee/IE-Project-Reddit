import React, { useState } from "react";
import image from "./../../assets/media/signup.jpg";
import { Link, withRouter } from "react-router-dom";
import PasswordField from "../Layouts/PasswordField";
import axios from "axios";

const Signup = ({ history }) => {
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getPassword = (pass) => setPassword(pass);

  document.body.style.backgroundColor = "white";

  const register = () => {
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmailError("invalid email address!");
      return;
    } else setEmailError("");

    if (password.length < 8 && password != "") {
      setPassError("password must be at least 8 characters!");
      return;
    } else setPassError("");

    if (!email) {
      setEmailError("please enter email!");
      return;
    } else setEmailError("");

    if (!username) {
      setUserError("please enter username!");
      return;
    } else setUserError("");

    if (!password) {
      setPassError("please enter password!");
      return;
    } else setPassError("");

    const user = {
      username: username,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/users/signup", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push({
          pathname: "/",
          state: { user: res.data.user },
        });
      })
      .catch((err) => setUserError(err.response.data));

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
