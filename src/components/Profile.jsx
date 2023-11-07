import React from "react";
import { NavLink } from "react-router-dom";

const Profile = (Props) => {

    return (
        <>
            <div className="crd" onMouseOver={Props.enter} onMouseLeave={Props.leave}>
                <div className="card-body">
                    <h6>Welcome</h6>
                    <p className="proContent">To Acess Account And Manage Orders</p>
                    <NavLink to='/LoginPage'> <button id="Login">Login / SignUp</button> </NavLink>
                    <br />
                    <hr />
                    <p className="proContent">Orders</p>
                    <p className="proContent">Whishlist</p>
                    <p className="proContent">Gift Cards</p>
                    <p className="proContent">Contact Us</p>
                </div>
            </div>
        </>
    )
}

export default Profile;