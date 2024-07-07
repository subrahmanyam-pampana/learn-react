import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function NavBar({title="Set Title Here",aboutText="Set About Text Here",mode='light',onToggleMode}) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <Link to="/" className='navbar-brand' >{title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link"  >Home</Link>
            </li>
            <li className="nav-item">
               <Link to="/about" className="nav-link" >{aboutText}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

NavBar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string   
}

//this sytax is depricated
// NavBar.defaultProps = {
//     title:"Set Title Here",
//     aboutText:"Set About Text Here"
// }

