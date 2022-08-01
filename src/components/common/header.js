import React from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import welcome from '../../assets/video/welcome.gif'
function Header() {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} />
        </div>
        <div className='welcome_text'>
          <img src={welcome} />
        </div>
        <div>
            <Link className="btn btn-danger btn-lg" to={"/login"}>LOGIN</Link>
        </div>
    </div>
  )
}

export default Header;