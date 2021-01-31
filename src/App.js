import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import SkillSet from './Components/SkillSet';
import About from './Components/About';
import Education from './Components/Education';
import mainbgImg from "./Images/bg.jpeg";
import Project from "./Components/Project";
import {
  BrowserRouter as Router,Switch,
  Route,
} from "react-router-dom";
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import MyCV from './Components/MyCV';


function App() {
  return (
    <>
      {/* <Header/> */}
        <div className="wrapper_div" id="wrapper">
          <img className = "mainbgimg" src = {mainbgImg} alt = "main_bgimg"/>
          <SideBar/>
          {/* <MainContent/> */}
          {/* <Router> */}
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/about">
            <About />
            </Route>
            <Route path="/education">
            <Education />
            </Route>
            <Route path="/skillset">
            <SkillSet />
            </Route>
            <Route path="/project">
            <Project />
            </Route>
            <Route path="/contact">
            <Contact/>
            </Route>
            <Route path="/experience">
            <Experience/>
            </Route>
            <Route path="/mycv">
            <MyCV/>
            </Route>
           </Switch>
          {/* </Router> */}
        </div>
    </>
  );
}

export default App;


{/* <Route path="/education">
      <Education />
      </Route>
      <Route path="/skills">
      <Skills />
      </Route>
      <Route path="/contact">
      <Contact />
      </Route> 
      </Router>

        {/* <Switch>
          <Route exact path="/">
            <mainconent/>
          </Route>
          <Route exact path="/skillset">
            <SkillSet/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch> */}