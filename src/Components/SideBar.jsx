import React from 'react';
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import profilepic from "../Images/karishma.jpeg";
import ListItem from './ListItem';
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from './Navbar';
import GetInTouch from './GetInTouch';

const SideBar = () => {

  const lblStyle = {
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className ="bg-light border-right" id="sidebar-wrapper">
        <div className = "img_div">
          <img src = {profilepic} alt = "karishma Gajria Agarwal"/>
        </div>
        <div className ="sidebar-heading">
          <h3>Karishma Gajria Agarwal</h3>
          <p><u>gajriakarishma123@gmail.com</u></p>

        </div>
        <div className = "sidebar-position">
          FrontEnd (React) Developer
        </div>
        <div className ="list-group list-group-flush">
          <Navbar/>
        </div>
        <GetInTouch d_color = "white"/>
          <br/>
          <hr/>
          <br/>
          <label style = {lblStyle}>"Consistencty is the key to success !"</label>
          <br/>
          <hr/>
          <br/>
          <label style = {lblStyle}>"A man is amde by his beleif,As he believe so he becomes.."</label>
      </div>
      
    </>
  )
}

export default withRouter(SideBar);