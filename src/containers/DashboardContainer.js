import Dashboard from "../layouts/dashboard/Dashboard.js"
import { bindActionCreators } from 'redux';
import { actions } from '../actions/jsnActions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    balance: state.metacoin.balance,
    balanceJsn: state.jsn.balance,
    transactions: state.metacoin.transactions,
    web3: state.web3.web3Instance,
    allAmount: state.jsn.allAmount,
    freeAmount: state.jsn.freeAmount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: account => dispatch(actions.fetchBalance(account)),
    fetchAllAmount: account => dispatch(actions.fetchAllAmount(account)),
    fetchFreeAmount: account => dispatch(actions.fetchFreeAmount(account))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
