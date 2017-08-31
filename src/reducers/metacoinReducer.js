const SET_BALANCE = 'SET_BALANCE';
const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
const SET_BALANCE_METACION = 'SET_BALANCE_METACION';

export default function reducer(state = {
  balance: 0,
  transactions: [],
  }, action = {}) {
  switch (action.type) {
    case (SET_BALANCE_METACION):
      return {
        ...state,
        balanceMetacoin: action.balanceMetacoin,
      }
    case (RECEIVE_TRANSACTION):
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
      }
    default: return state;
  }
}
