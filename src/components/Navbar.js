import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleChange = (event)=>{
    if(event.target.checked === true){
      props.toggleToColors(event.target.value);
    }else{
      props.toggleToColors(null);
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link> */}
              {/* <a className="nav-link" href="/about">
                {props.aboutText}
              </a> */}
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className={`form-check form-switch m-3 text-${props.mode==='dark' ? 'light': 'dark'}`}>
            <input className="form-check-input" onClick={handleChange} type="checkbox" role="switch" id="inlineCheckbox1" value="darkBlue"/>
            <label className="form-check-label" htmlFor="inlineCheckbox1">Dark Blue</label>
          </div> */}
          <div className={`form-check form-switch text-${props.mode==='dark' ? 'light': 'dark'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};
