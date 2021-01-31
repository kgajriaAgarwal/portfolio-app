import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

const ListItem = (props) => {
    return(
      <li id={props.item} style = {{listStyleType: 'none'}}>
          <NavLink to={props.tolink} onClick={props.activec.bind(props.item)} style = {{color: 'white '}}>{props.item}</NavLink>
      </li>
    );
  }

export default ListItem;
