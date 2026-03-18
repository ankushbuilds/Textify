import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Child component of App.jsx
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                {props.homeText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
         

          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="modeSwitch"
              checked={props.mode === 'dark'}
              onChange={props.toggleDarkMode}
            />
            <label className="form-check-label" htmlFor="modeSwitch">
              {props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}
// Props are used to pass data from parent component to child component.
// It is a one way data binding. It is read only. It cannot be modified by the child component.
// It is used to render dynamic content in the child component.
// It is used to make the component reusable.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
}
// isRequired is used to make the prop mandatory. If the prop is not passed, it will give a warning in the console.
// Navbar.defaultProps = {
//   title : "Set Title Here",
//   aboutText : "About",
//   homeText : "Home"
// };
