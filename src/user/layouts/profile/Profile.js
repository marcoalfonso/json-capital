import React, { Component } from 'react'
import ProfileFormContainer from '../../ui/profileform/ProfileFormContainer'

class Profile extends Component {
  render() {
    return(
      <div className="splash">
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Profile</h1>
              <p>Edit your account details here.</p>
              <ProfileFormContainer />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Profile
