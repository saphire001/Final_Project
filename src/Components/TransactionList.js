import React from 'react';
import { connect } from 'react-redux';
import Transactions from './Transactions';

class TransactionList extends React.Component {

  render() {
    const transactionList = this.props.transactions.map(transaction => {
      return <Transactions transaction={transaction} />
    });

    return (
		<div>
			<div>
				<h2 style={{ textAlign: "center"}}> History of Transaction</h2>
			</div>
			
			<div class="container" style={{display:"flex"}}>
				{transactionList}
			</div>
		</div>
	
    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
}

export default connect(mapStateToProps)(TransactionList);