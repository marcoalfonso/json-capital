import Dashboard from "../layouts/dashboard/Dashboard.js"
import { bindActionCreators } from 'redux';
import { actions } from '../actions/jsnActions.js';
import { connect } from 'react-redux';
//import web3 from "../web3.js"
import store from '../store'

let web3 = store.getState().web3.web3Instance

function mapStateToProps(state, props) {
  return {
    balance: state.metacoin.balance,
    balanceJsn: state.jsn.balance,
    transactions: state.metacoin.transactions
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(actions.fetchBalance(web3.eth.accounts[0])),
    onSubmit: ({receiver, amount}) =>
      dispatch(actions.send(receiver, amount)),
    ...bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
