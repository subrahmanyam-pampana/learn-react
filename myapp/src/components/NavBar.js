import React from 'react';
import PropTypes from 'prop-types'


export default function NavBar({title="Set Title Here",aboutText="Set About Text Here",mode='light',onToggleMode}) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <a className="navbar-brand" href="/">{title}</a>
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
              <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {aboutText}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary my-2 my-sm-0" type="button">
              Search
            </button>
            {/* <button type='button' className='btn btn-primary mx-2' onClick={onToggleMode} >{mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}</button> */}
            <div className={`form-check form-switch text-${mode==='dark'?'white':'dark'} mx-2`}>
              <input type="checkbox" className="form-check-input" onClick={onToggleMode} id="modeSwitch" />
              <label htmlFor="modeSwitch" className="form-check-label">{mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}</label>
            </div>
            
          </form>
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

