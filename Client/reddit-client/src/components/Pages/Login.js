import React, { useState } from "react";
import image from "./../../assets/media/login.jpg";
import { Link } from "react-router-dom";
import PasswordField from "../Layouts/PasswordField";
import axios from "axios";

const Login = ({ history }) => {
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");

  document.body.style.backgroundColor = "white";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getPassword = (pass) => setPassword(pass);

  const login = () => {
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
      password: password,
    };

    axios
      .post("http://localhost:3000/users/signin", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push({
          pathname: "/",
          state: { user: res.data.user },
        });
      })
      .catch((err) => {
        if (err.response.data == "User with this username was not found")
          setUserError(err.response.data);
        else setPassError(err.response.data);
      });
  };

  return (
    <div className="container">
      <div className="body d-md-flex align-items-center justify-content-between">
        <div className="box-1 mt-md-0 mt-5">
          <img src={image} />
        </div>
        <div className="box-2 d-flex flex-column h-100">
          <div className="mt-5">
            <h1 className="mb-1 h-1">Login</h1>

            <p className="text-muted mb-2">
              {"By continuing, you agree to our "}
              <a href="https://www.redditinc.com/policies/user-agreement">
                {"User Agreement "}
              </a>
              {"and "}
              <a href="https://www.redditinc.com/policies/privacy-policy">
                Privacy Policy
              </a>
              .
            </p>

            <form>
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
                className="btn btn-primary"
                type="button"
                onClick={() => login()}
              >
                Log In
              </button>

              <div className="BottomText m-secondary-text login-bottom-text hideable">
                <span className="BottomLink m-secondary-text">Forgot your</span>{" "}
                <a href="/username?experiment_d2x_2020ify_buttons=enabled&amp;experiment_d2x_sso_login_link=enabled&amp;experiment_d2x_google_sso_gis_parity=enabled&amp;experiment_d2x_onboarding=enabled">
                  username
                </a>{" "}
                <span className="BottomLink m-secondary-text">or</span>{" "}
                <a
                  className="BottomLink m-secondary-text"
                  href="/password?experiment_d2x_2020ify_buttons=enabled&amp;experiment_d2x_sso_login_link=enabled&amp;experiment_d2x_google_sso_gis_parity=enabled&amp;experiment_d2x_onboarding=enabled"
                >
                  password
                </a>
                <span className="BottomLink m-secondary-text m-question">
                  &nbsp;?
                </span>
              </div>

              <div>
                {"New to Reddit? "}
                <Link className="login-link" to="/signup">
                  SIGN UP
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
