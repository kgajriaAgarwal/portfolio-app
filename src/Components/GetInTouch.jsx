import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withTheme } from '@material-ui/core';

function GetInTouch(props) {
  

  const a_style = {
    color: `${props.d_color}`
  }

  const div_style = {
    color: `${props.d_color}`,
    fontWeight: 'bolder',
    boxSizing: 'border-box',
    marginBottom: '10px',
    border: `2px solid ${props.d_color}`,
    margin: '30px'
}

  return (
    <div>
      <div className = "getintouch_div" style = {div_style}> 
        <h4>Get in Touch..</h4>
        <ul className ="menu" >
          <a href = "https://www.linkedin.com/in/karishma-gajria-768107138/?originalSubdomain=in" style = {a_style} target = "_blank"><li><LinkedInIcon/></li></a>
          <a href = "" style = {a_style} target = "_blank"><li><GitHubIcon/></li></a>
          <a href = "https://www.facebook.com/karishma.gajria.10?fref=nf" style = {a_style} target = "_blank"><li><FacebookIcon/></li></a>
          <a href = "https://www.instagram.com/karishmagajria/" style = {a_style} target = "_blank"><li><InstagramIcon/></li></a>
        </ul>
      </div>
    </div>
  )
}

export default GetInTouch
