import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AboutContainer from "../NavBarHeading";

import { useSelector, useDispatch } from "react-redux";
import url from "../../constant/url";
import { UserData } from "src/utils/userData";
import CustomButton from "../customButtom/customButton";
import "./navbar.css"


const NavBar = (props: any) => {
  let data = UserData();

  useEffect(() => {}, [data]);

  return (
    <>
      <div
        className="container"
        style={{
          padding: 0,
          margin: "0  auto",
        }}
      >
        <nav className="navbar navbar-expand-lg text-white">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="/images/pahpo_logo.jfif"
                alt=""
                className="img-fluid"
                style={{ width: "100px", borderRadius: "50%", height: "100px" }}
              />
            </Link>
            <CustomButton />
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    aria-current="page"
                    to="/"
                  >
                    Affiliate Programs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/services"
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  >
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="#"
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  >
                    CourseMed
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="#"
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  >
                    Conferences
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="#"
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  >
                    Donate
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Team
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <Link className=" dropdown-item" to="/pioneers">
                        Pioneers
                      </Link>
                    </li>
                    <li>
                      <Link className=" dropdown-item" to="/executive">
                        The Executives
                      </Link>
                    </li>
                    <li>
                      <a className=" dropdown-item" href="#">
                        Regional Directors (RD)
                      </a>
                    </li>
                    <li>
                      <a className=" dropdown-item" href="#">
                        Country Directors (CD)
                      </a>
                    </li>
                    <li>
                      <a className=" dropdown-item" href="#">
                        Ambassadors
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Features
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <a className=" dropdown-item" href="/about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className=" dropdown-item" href="#">
                        Event
                      </a>
                    </li>
                    <li>
                      <a className=" dropdown-item" href="#">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a className=" dropdown-item" href="#">
                        Adverts
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Partners
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <a className=" dropdown-item" href="#">
                        Locals
                      </a>
                    </li>
                    <li>
                      <a className=" dropdown-item" href="#">
                        International
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <a className=" dropdown-item" href="#">
                        Headquaters
                      </a>
                    </li>
                    <li>
                      <a className=" dropdown-item" href="#">
                        Regional Directors
                      </a>
                    </li>

                    <li>
                      <a className=" dropdown-item" href="#">
                        Country Directors
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              {data && data.full_name ? (
                <div className="d-flex">
                  <Link
                    to="/dashboard"
                    className="btn btn-lg"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                    type="submit"
                  >
                    Dashboard
                  </Link>
                </div>
              ) : (
                <div className="d-flex">
                  <Link to="/login" className="btn_login" type="submit">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
