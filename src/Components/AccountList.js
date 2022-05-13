import React from 'react';
import { connect } from 'react-redux';
import Accounts from './Accounts';


class AccountList extends React.Component {

  render() {
    const accountList = this.props.accounts.map(account => {
      return <Accounts account={account} />
    });

    return (
        <div>
			<div>
				<h2 style={{ textAlign: "center" }}>Account Dashboard</h2>
			</div>
			
			<div class="container" style={{display:"flex"}}>
          {accountList}
			</div>
		</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  };
}

export default connect(mapStateToProps)(AccountList);