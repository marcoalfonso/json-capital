import React from 'react'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <li className="pure-menu-item">
      <a href="/signup" className="json-button" onClick={(event) => onLoginUserClick(event)}>Investors Login</a>
    </li>
  )
}

export default LoginButton
