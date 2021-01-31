import React, { useState} from 'react';
import ListItem from './ListItem';


const Navbar = () => {
    //hooks @topmost level of functional componnets
    const [navItemState,setnavItemState] = useState({'NavItemActive':''});

     const activeitem = (x) =>
    {
        if(navItemState.length>0){
            document.getElementById(navItemState).classList.remove('active');
        }
        setnavItemState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    }; 

    return (
        <nav>
        <ul>
        <ListItem item="Home" tolink="/"  activec={activeitem}></ListItem>
        <ListItem item="About" tolink="/about"  activec={activeitem}></ListItem>
        <ListItem item="Education" tolink="/education"  activec={activeitem}></ListItem>
        <ListItem item="SkillSet" tolink="/skillset"  activec={activeitem}></ListItem>
        <ListItem item="Contact" tolink="/contact"  activec={activeitem}></ListItem>
        <ListItem item="Project" tolink="/project"  activec={activeitem}></ListItem>
        <ListItem item="Experience" tolink="/experience"  activec={activeitem}></ListItem>
        {/* <ListItem item="MyCV" tolink="/mycv"  activec={activeitem}></ListItem> */}
        </ul>
        </nav>
    )
}

    export default Navbar