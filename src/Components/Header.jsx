import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  //usestatte hooks @ top level of unctional component
  // const [sidebarStatus, setsidebarStatus] = useState(false);

  return (
    <div className = "header_div">
      <button ><MenuIcon/></button>
      <span>karishma's Portfio</span>
    </div>
  )
}

export default Header
