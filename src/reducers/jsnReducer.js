const SET_BALANCE = 'SET_BALANCE'
const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'
const SET_TOTAL_AMOUNT = 'SET_TOTAL_AMOUNT'
const SET_FREE_AMOUNT = 'SET_FREE_AMOUNT'

// The initial application state
let initialState = {
  balance: 0,
  allAmount: 0,
  freeAmount: 0
}

const jsnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: action.balance
      }

    case SET_TOTAL_AMOUNT:
      return {
        ...state,
        allAmount: action.allAmount
      }

    case SET_FREE_AMOUNT:
      return {
        ...state,
        freeAmount: action.freeAmount
      }

    default:
      return state
  }
}

export default jsnReducer
