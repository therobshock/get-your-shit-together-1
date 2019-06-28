import React from "react";
// import logo from "../logo.svg";
import "./Compstyles/Descriptionstyle.css";
import MyModal from './MyModal';


const Description = () => (
    <React.Fragment>
        <MyModal />
        <div >
            <p className="description animated fadeIn">Are friends and relatives telling you that they find your repulsive? Tired of finding dead cats under your piles of old newpapers? Then, it's time for you to git your shit together.  </p>

            <div className="reg-button"><button type="button" className="btn btn-default btn-lg animated fadeIn">Login/Register</button></div>


        </div>
    </React.Fragment>

);



export default Description;