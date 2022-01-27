import React from "react";
import logo from "../../assets/media/navlogo.png";
import SearchInput from "./SearchInput";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import HomeToggle from "../Layouts/HomeToggle";
import AddPostToggle from "../Layouts/AddPostToggle";
import SettingToggle from "../Layouts/SettingToggle";

const Navbar = (params) => {
  const navPage = params.navPage;
  const user = params.user;

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

          <Dropdown className="mt-1 ms-4">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <a
                className="text-muted text-decoration-none"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {navPage == "home" ? (
                  <HomeToggle />
                ) : navPage == "addPost" ? (
                  <AddPostToggle />
                ) : navPage == "userSetting" ? (
                  <SettingToggle />
                ) : (
                  ""
                )}
              </a>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  className="text-muted text-decoration-none"
                  to={{
                    pathname: "/",
                    state: { user: user },
                  }}
                >
                  {" Home "}
                  <span>
                    <i className="fas fa-home fa-lg ms-6"></i>
                  </span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  className="text-muted text-decoration-none"
                  to={{
                    pathname: "/userSettings",
                    state: { user: user },
                  }}
                >
                  {"user settings "}
                  <span>
                    <i className="fas fa-cog fa-lg ms-2"></i>
                  </span>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link
                  className="text-muted text-decoration-none"
                  to={{
                    pathname: "/addPost",
                    state: { user: user },
                  }}
                >
                  {"add new post "}
                  <span>
                    <i className="fas fa-plus ms-1"></i>
                  </span>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <SearchInput />
        </div>

        <NavList user={user} />
      </div>
    </nav>
  );
};

export default Navbar;
