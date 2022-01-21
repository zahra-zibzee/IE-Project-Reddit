import React from "react";
import logo from "../../assets/media/navlogo.png";
import avatar from "../../assets/media/avatar.jpg";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import NavControls from "./NavControls";
const Navbar = (isContact) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-between">
        <div className="d-flex">
          <a
            className="navbar-brand me-2 mb-1 d-flex align-items-center"
            href="#"
          >
            <img src={logo} height="30" />
          </a>

          <div class="collapse navbar-collapse ms-3 me-3 border h-20 rounded" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {"Dropdown "}
                  <span>
                    <i className="fas fa-home fa-lg"></i>
                  </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="input-group w-auto my-auto d-none d-sm-flex">
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded search-wide"
              placeholder="Search Reddit"
            />
            <span className="input-group-text border-0 d-none d-lg-flex">
              <i className="fas fa-search"></i>
            </span>
          </form>
        </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
