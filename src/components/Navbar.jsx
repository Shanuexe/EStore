import React, { useState } from "react";
import "..//App.css"
import Profile from "./Profile";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h2 className="navbar-brand" href="#">E-Store</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link" aria-current="page" href="#">Clothing</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">Jewellery</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">Electronics</button>
              </li>
            </ul>
            <div className="iconSpan"> <i className="fa-solid fa-heart fa-xl" ></i> </div>
            <div className="iconSpan"> <NavLink className="navLink" to='/Cart'> <i className="fa-solid fa-cart-shopping fa-xl"></i> </NavLink> </div>
            <div className="iconSpan" onMouseOverCapture={handleMouseOver} onMouseOut={handleMouseOut}> <NavLink className='navLink' to='/ProfileDash'> <i className="fa-solid fa-user fa-xl"  > </i> </NavLink> </div>
          </div>
        </div>
      </nav>
      {isHovering && <Profile enter={handleMouseOver} leave={handleMouseOut} />}
    </>

  )
}

export default Navbar;