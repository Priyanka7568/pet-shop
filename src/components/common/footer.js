import React from 'react'
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    <div className="footer bg-dark text-white">
        <div className='logo'>
            <img src={logo} />
        </div>
        <div className='mt-5'>
            <div className='social-icons'>
            <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'google']} />
            </div>
            <p className='m-0 py-3'>
                <small>
                © 2022 pet shop ® - fresh and healthy pet meals, made with love
                </small>
            </p>
        </div>
    </div>
  )
}

export default Footer;