import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const Navbar = () => {
  const x = useLocation();
  const initialPath = x.pathname;
  const [showLogin, setshowLogin] = useState(true);
  const [addSpace, setAddSpace] = useState(initialPath !== "/");
  const [shouldStick, setShouldStick] = useState(initialPath !== "/");

  useEffect(() => {
    const currentPath = x.pathname;
    if (currentPath === "/") {
      setAddSpace(false);
      if (window.scrollY < 40) setShouldStick(false);
    } else {
      setAddSpace(true);
      setShouldStick(true);
    }
  }, [x]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.location.pathname === "/") {
        if (e.currentTarget.scrollY > 40) {
          setShouldStick(true);
        } else {
          setShouldStick(false);
        }
      } else {
        setShouldStick(true);
      }
    });
  }, []);

  return (
    <>
      {addSpace && <div className="spacer"></div>}
      <nav
        id="nav-bar"
        className={
          "navbar navbar-expand-lg navbar-dark fixed-top " +
          (!shouldStick ? "nav-transparent" : " nav-clr")
        }
        style={{
          position: "fixed",
        }}
      >
        <div className="container flex-center">
          {/* <Link exact to="/">
          <img src={mw} width="60px" height="60px" style={{borderRadius:"50%",margin:"0% 5px -8px -35px"}} />
        </Link> */}
          <h4
            style={{
              color: "white",
              display: "block",
              margin: "0",
              fontSize:35,
            }}
          >
           TGS
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/details">
                  Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact Us
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" exact to="/gallery">
                  Gallery
                </NavLink>
              </li> */}
                <li className="nav-item">
                <NavLink className="nav-link" exact to="/image-uploader">
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="super-btn"
                  type="button"
                  data-toggle="modal"
                  data-target="#authModal"
                >
                  <a
                    className="nav-link"
                    href="#user-login"
                    onClick={(e) => e.preventDefault()}
                  >
                    USER Login
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Modal --> */}
      <div
        className="modal"
        style={{
          background: "rgba(0,0,0,0.2)",
        }}
        id="authModal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={"nav-link " + (showLogin ? "active" : "")}
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => setshowLogin(true)}
                  >
                    LOGIN
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={"nav-link " + (!showLogin ? "active" : "")}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#signup"
                    type="button"
                    role="tab"
                    aria-controls="signup"
                    aria-selected="false"
                    onClick={() => setshowLogin(false)}
                  >
                    SIGN UP
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div>
                  {showLogin ? (
                    <Login toggler={setshowLogin} />
                  ) : (
                    <SignUp toggler={setshowLogin} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
