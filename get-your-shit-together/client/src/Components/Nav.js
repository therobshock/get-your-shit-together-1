import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import logo from "../logo.svg";
import "./Compstyles/Descriptionstyle.css";

const Nav = () => (
    
        
    <div >
        
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/dashboard">GYST</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/dashboard">Dashboard <span class="sr-only">(current)</span></a> 
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/add-shit">   Add Shit</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/journal">Journal</a>
      </li>
      
    </ul>
  </div>
</nav>
        
       
        
    </div>
       

);
  


export default Nav;