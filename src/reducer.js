import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user/userReducer'
import metacoinReducer from './reducers/metacoinReducer'
import jsnReducer from './reducers/jsnReducer'
import web3Reducer from './util/web3/web3Reducer'

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  web3: web3Reducer,
  metacoin: metacoinReducer,
  jsn: jsnReducer
})

export default reducer
