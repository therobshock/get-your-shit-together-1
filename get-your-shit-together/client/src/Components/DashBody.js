import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Footer from "./Footer";
// import logo from "../logo.svg";
import "./Compstyles/Dashbodystyle.css";

const DashBody = () => (

    <div className="container dashbody">
        <div className="row blankrow">
            <div className="col-12">
                <div id="randomQuote"></div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <h1 className="dashHeader">Welcome! (UserName)!</h1>
                <h3><a href="/add-shit">Get rid of your $#!T</a></h3>
                <p>Are you ready to ditch the crap that's taking over your life? Here you can add items that you're thinking of getting rid of and we'll help you prioritize the one's you should throw away now. </p>
                <h3><a href="/journal">Talk about your $#!T</a></h3>
                <p>Sometimes we develop an unhealthy attachment to material things. Explore the thoughts and feeling that are making you cling to stuff you don't really need. </p>
            </div>
            <div className="col-lg-6">
                <div id="randomGif"></div>

            </div>
        </div>
        <div className="row pastEntries">
            <div className="col-lg-6">
                <h3>The $#!T List</h3>
                <div className="shitlist"></div>
                <p>Cat Panties<br />
                    Raccoon Parts<br />
                    Fuzzy Dice<br /></p>
            </div>
            <div className="col-lg-6">
                <h3>$#!T Talk</h3>
                <div className="shittalk"></div>
                <p>Why is this happening now?<br />
                    Santa Brought me Corndogs<br />
                    Fuzzy Dice, I love you<br /></p>
            </div>
        </div>

        <div id="footer" className="animated bounceInUp bounce">



        </div>
    </div>


);




export default DashBody;