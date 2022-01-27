import React, { useEffect, useState } from "react";
import Navbar from "../../Searchbar/Navbar";
import { useLocation } from "react-router-dom";
import AccountSetting from "./AccountSetting";
import CustomizeProfile from "./CustomizeProfile";

const UserSettings = (params) => {
  document.body.style.backgroundColor = "white";
  const [accountActive, setAccountActive] = useState(true);
  const location = useLocation();
  const { user } = location.state;

  return (
    <>
      <main className="dark page">
        <Navbar navPage="userSetting" user={user} />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 mt-4">
            <h5>User Settings</h5>

            <ul className="nav nav-tabs mt-5">
              <li className="nav-item">
                <a
                  className={
                    accountActive
                      ? "nav-link fw-bold active"
                      : "nav-link fw-bold text-muted"
                  }
                  aria-current="page"
                  onClick={() => setAccountActive(true)}
                >
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    !accountActive
                      ? "nav-link fw-bold active"
                      : "nav-link fw-bold text-muted"
                  }
                  onClick={() => setAccountActive(false)}
                >
                  Profile
                </a>
              </li>
            </ul>

            {accountActive ? <AccountSetting user={user} /> : <CustomizeProfile user={user}/>}
          </div>
          <div className="col-3"></div>
        </div>
      </main>
    </>
  );
};

export default UserSettings;
