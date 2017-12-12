import JSN from "../jsn";
const SET_BALANCE = 'SET_BALANCE'
const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'
const SET_TOTAL_AMOUNT = 'SET_TOTAL_AMOUNT'
const SET_FREE_AMOUNT = 'SET_FREE_AMOUNT'
const SET_ETHEREUM_ACCOUNT = 'SET_ETHEREUM_ACCOUNT'

export const actions = {
  setEthereumAccount: (ethereumAccount) => {
    return {
      type: SET_ETHEREUM_ACCOUNT,
      ethereumAccount,
    };
  },

  setBalance: (balance) => {
    return {
      type: SET_BALANCE,
      balance,
    };
  },

  setTotalAmount: (allAmount) => {
    return {
      type: SET_TOTAL_AMOUNT,
      allAmount,
    };
  },

  setFreeAmount: (freeAmount) => {
    return {
      type: SET_FREE_AMOUNT,
      freeAmount,
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

  fetchAllAmount: function(account) {
    return (dispatch, getState) => {
      JSN.then((jsn) => {
        jsn.getTotalSupply.call({ from: account }).then((allAmount) => {
          dispatch(this.setTotalAmount(allAmount.valueOf()))
        })
      })
    }
  },

  fetchFreeAmount: function(account) {
    return (dispatch, getState) => {
      JSN.then((jsn) => {
        jsn.getFreeToken.call({ from: account }).then((freeAmount) => {
          dispatch(this.setFreeAmount(freeAmount.valueOf()))
        })
      })
    }
  },

  transferJsn: function(account1, account2, transferAmmount) {
    return (dispatch, getState) => {
      JSN.then((jsn) => {
        jsn.transfer(account2, transferAmmount, {from: account1, gasPrice: 20000000000, gas: 3000000}).then(() => {
          dispatch(this.fetchBalance(account1))
          dispatch(this.fetchAllAmount(account1))
          dispatch(this.fetchFreeAmount(account1))
        })
      })
    }
  }
}
