import React, {useState} from "react";
import Navbar from "../../Searchbar/Navbar";
import AccountSetting from "./AccountSetting";
import CustomizeProfile from "./CustomizeProfile";

const UserSettings = () => {
  document.body.style.backgroundColor = "white";
  const [accountActive, setAccountActive] = useState(true);

  return (
    <>
      <main className="dark page">
        <Navbar navPage="userSetting" />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 mt-4">
            <h5>User Settings</h5>

            <ul className="nav nav-tabs mt-5">
              <li className="nav-item">
                <a className={accountActive? "nav-link fw-bold active" : "nav-link fw-bold text-muted"} aria-current="page" onClick={() => setAccountActive(true)}>
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a className={!accountActive? "nav-link fw-bold active" : "nav-link fw-bold text-muted"} onClick={() => setAccountActive(false)}>
                  Profile
                </a>
              </li>
              
            </ul>
            
            {accountActive ? <AccountSetting /> : <CustomizeProfile />}

          </div>
          <div className="col-3"></div>
        </div>
      </main>
    </>
  );
};

export default UserSettings;
