import AuthenticationContract from '../../../../build/contracts/Authentication.json'
import { actions } from '../../../actions/jsnActions'
import { browserHistory } from 'react-router'
import store from '../../../store'

const contract = require('truffle-contract')

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function signUpUser(address) {
  return function(dispatch) {
    // dispatch(setEthereumAccount(address))
    dispatch(actions.setEthereumAccount(address))
    dispatch(userLoggedIn({"name": address}))
    browserHistory.push('/dashboard')
  }
}

// export function signUpUser(name) {
//   let web3 = store.getState().web3.web3Instance

//   // Double-check web3's status.
//   if (typeof web3 !== 'undefined') {

//     return function(dispatch) {
//       // Using truffle-contract we create the authentication object.
//       const authentication = contract(AuthenticationContract)
//       authentication.setProvider(web3.currentProvider)

//       // Declaring this for later so we can chain functions on Authentication.
//       var authenticationInstance

//       // Get current ethereum wallet.
//       web3.eth.getCoinbase((error, coinbase) => {
//         // Log errors, if any.
//         if (error) {
//           console.error(error);
//         }

//         authentication.deployed().then(function(instance) {
//           authenticationInstance = instance

//           // Attempt to sign up user.
//           authenticationInstance.signup(name, {from: coinbase})
//           .then(function(result) {
//             // If no error, login user.
//             return dispatch(loginUser())
//           })
//           .catch(function(result) {
//             // If error...
//           })
//         })
//       })
//     }
//   } else {
//     console.error('Web3 is not initialized.');
//   }
// }
