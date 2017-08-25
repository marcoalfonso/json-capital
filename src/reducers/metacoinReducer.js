const SET_BALANCE = 'SET_BALANCE';
const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

export default function reducer(state = {
  balance: 0,
  transactions: [],
  }, action = {}) {
  switch (action.type) {
    case (SET_BALANCE):
      return {
        ...state,
        balance: action.balance,
      }
    case (RECEIVE_TRANSACTION):
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
      }
    default: return state;
  }
}
