import React from "react";
import avatar from "../../assets/media/avatar.jpg";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const NavList = () => {
  return (
    <>
      <ul className="navbar-nav flex-row d-none d-md-flex">
        <li className="nav-item me-3 me-lg-1 mt-2">
          <a className="nav-link" href="#">
            {"user settings "}
            <span>
              <i className="fas fa-cog fa-lg"></i>
            </span>
          </a>
        </li>

        <li className="mt-2">
          <BootstrapSwitchButton
            checked={true}
            width={75}
            onstyle="dark"
            onlabel="Night"
            offlabel="Light"
          />
        </li>

        <li className="nav-item me-3 me-lg-1">
          <div className="nav-link d-sm-flex align-items-sm-center" href="#">
            <img src={avatar} className="rounded" height="40" alt="avatar" />
            <strong className="d-none d-sm-block ms-1">John</strong>
          </div>
        </li>
      </ul>
    </>
  );
};

export default NavList;
