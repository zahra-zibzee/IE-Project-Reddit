import React from "react";
import logo from "../../assets/media/navlogo.png";
import SearchInput from "./SearchInput";
import NavList from "./NavList";

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

          <div class="collapse navbar-collapse ms-5 me-3 border h-20 w-25 rounded" id="navbarNavDarkDropdown">
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

          <SearchInput />

        </div>

        <NavList />
        
      </div>
    </nav>
  );
};

export default Navbar;
