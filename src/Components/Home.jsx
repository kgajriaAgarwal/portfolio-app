import React from 'react'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import SideBar from './SideBar';
import Header from "./Header";
import mainbgImg from "../Images/bg.jpeg";

function Home() {
  return (
    <>
      <div className = "category">
        <label>Hi, I'm <span style = {{fontSize : '45px', color: 'darkcyan'}}>karishma</span>,
        <br/>a software engineer specialized in front-end development.I am a self-learnt REACT Developer </label>
      </div>
    </> 
  )
}

export default Home;

