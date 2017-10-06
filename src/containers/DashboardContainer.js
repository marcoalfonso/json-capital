import Dashboard from "../layouts/dashboard/Dashboard.js"
import { bindActionCreators } from 'redux';
import { actions } from '../actions/jsnActions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    balanceJsn: state.jsn.balance,
    web3: state.web3.web3Instance,
    allAmount: state.jsn.allAmount,
    freeAmount: state.jsn.freeAmount,
    account: state.jsn.ethereumAccount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: account => dispatch(actions.fetchBalance(account)),
    fetchAllAmount: account => dispatch(actions.fetchAllAmount(account)),
    fetchFreeAmount: account => dispatch(actions.fetchFreeAmount(account)),
    onDashboardTransferSubmit: (account1, account2, transferAmmount) => {
      dispatch(actions.transferJsn(account1, account2, transferAmmount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
