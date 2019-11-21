import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const onClickHandler = () => {
  console.log("test");
};
const Header = ({ brand }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="fas fa-address-book mr-2"></i>
            {brand}
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  onClick={onClickHandler}
                  to="/"
                  className="nav-link active"
                >
                  <i className="fas fa-home px-2"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link ">
                  <i className="fas fa-plus px-2"></i>
                  Add Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link ">
                  <i className="fas fa-question px-2"></i>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
