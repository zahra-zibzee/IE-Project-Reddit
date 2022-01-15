import React from "react";
import image from "./../../assets/media/login.jpg";

const Login = () => {
  const userError = "";
  const passError = "";

  return (
    <div class="container">
      <div className="body d-md-flex align-items-center justify-content-between">
        <div className="box-1 mt-md-0 mt-5">
          <img src={image}/>
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
              <a
                href="https://www.redditinc.com/policies/privacy-policy"
              >
                Privacy Policy
              </a>
              .
            </p>

            <form>
              <fieldset className="login-fieldset">
                <label
                  htmlFor="loginUsername"
                >
                  Username
                </label>
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
                <label
                  htmlFor="loginPassword"
                >
                  Password
                </label>
                <input
                  id="loginPassword"
                  className="AnimatedForm__textInput "
                  type="password"
                  name="password"
                  className="form-control form-control-md"
                  required=""
                />
                {passError && <p className="error">{passError}</p>}
              </fieldset>

              <button className="btn btn-primary" type="submit">
                Log In
              </button>

              <div className="BottomText m-secondary-text login-bottom-text hideable">
                <span className="BottomLink m-secondary-text">Forgot your</span>{" "}
                <a
                  href="/username?experiment_d2x_2020ify_buttons=enabled&amp;experiment_d2x_sso_login_link=enabled&amp;experiment_d2x_google_sso_gis_parity=enabled&amp;experiment_d2x_onboarding=enabled"
                >
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

              <div className="BottomText login-bottom-text register hideable">
                {"New to Reddit? "}
                <a
                  className="BottomLink"
                  href="/account/register/?experiment_d2x_2020ify_buttons=enabled&amp;experiment_d2x_sso_login_link=enabled&amp;experiment_d2x_google_sso_gis_parity=enabled&amp;experiment_d2x_onboarding=enabled"
                >
                   Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
