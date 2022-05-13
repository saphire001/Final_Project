import React from 'react';
import { connect } from 'react-redux';
import Transactions from './Transactions';

class TransactList extends React.Component {

    render(){
        const TransactList = this.props.transactions.map(transactions  => {
            return <Transactions transactions={transactions}/>
        });
        return(
            <div>
			<div>
				<h2 style={{ textAlign: "center"}}>Transaction History</h2>
			</div>
			
			<div class="container" style={{display:"flex"}}>
				{TransactList}
			</div>
		</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactions : state.transactions
    };
}
export default connect(mapStateToProps)(TransactList);