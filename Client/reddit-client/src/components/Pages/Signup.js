import React from "react";
import image from "./../../assets/media/signup.jpg";
import { Link } from "react-router-dom";
import PasswordField from "../Layouts/PasswordField";

const Signup = () => {
  const userError = "";
  const passError = "";
  const emailError = "";

  return (
    <div class="container">
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
                  className="form-control form-control-md"
                  data-empty="true"
                />
                {userError && <p className="error">{userError}</p>}
              </fieldset>

              <fieldset className="login-fieldset">
                <PasswordField />
                {passError && <p className="error">{passError}</p>}
              </fieldset>

              <button className="btn btn-primary" type="submit">
                Register
              </button>

              <div>
                {"Already a Redditor? "}
                <Link className="login-link" to="/">
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

export default Signup;
