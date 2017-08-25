import web3 from "../web3";
import JSN from "../jsn";
const SET_BALANCE = 'SET_BALANCE';
const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

export const actions = {
  setBalance: (balance) => {
    return {
      type: SET_BALANCE,
      balance,
    };
  },

  receiveTransaction: (transaction) => {
    return {
      type: RECEIVE_TRANSACTION,
      transaction,
    };
  },

  fetchBalance: function(account) {
    return (dispatch, getState) => {
      JSN.then((jsn) => {
        jsn.balanceOf.call(account).then((balance) => {
          dispatch(this.setBalance(balance.toString()))
        })
      })
    }
  },

  send: function(address, amount) {
    return (dispatch, getState) => {
      JSN.then((jsn) => {
        jsn.sellCoin(
            address,
            amount,
            { from: web3.eth.accounts[1] }
          ).then((result) => {
            console.log(result)
        }).catch(function(e) {
          console.log(e)
        })
      })
    }
  }
}
