import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/grids-responsive-min.css'
import './css/marketing.css'
import './App.css'

class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        {/*<li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>*/}
        <LogoutButtonContainer />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        {/*<li className="pure-menu-item">
          <Link to="/signup" className="pure-menu-link">Sign Up</Link>
        </li>*/}
        <LoginButtonContainer />
      </span>
    )

    return (
      <div className="App">
        <div className="header">
          <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <div className="header__logo">
              <svg className="header__logo-icon">
                <svg id="logo" viewBox="0 0 209 209" width="100%" height="100%">
                  <title>Group</title>
                  <desc>Created using Figma</desc>
                  <g transform="translate(375 376)">
                    <g transform="rotate(90 105 -271)" fill="#ffffff">
                      <path id="a" fillRule="evenodd" d="M181 28H28v153h153V28zM28 0H0v209h209V0H28z"></path>
                    </g>
                    <g transform="rotate(-135 -138.306 -49.502)" fill="#ffffff">
                      <path id="c" d="M0 0h223.304v28H0V0z"></path>
                    </g>
                  </g>
                </svg>
              </svg>
              <a className="pure-menu-heading" href="/">JSON Capital</a>
            </div>
            <ul className="pure-menu-list">
              <OnlyGuestLinks />
              <OnlyAuthLinks />
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App
