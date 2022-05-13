import React from 'react';
import { connect } from 'react-redux';
import Transactions from './Transactions';

class TransactList extends React.Component {

    render(){
        const userTransacts = this.props.transacts.map(transaction  => {
            return <Transactions transaction={transaction}/>
        });
        return(
            <div>
			<div>
				<h2 style={{ textAlign: "center"}}>Transaction History</h2>
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
        transacts : state.transacts
    };
}
export default connect(mapStateToProps)(TransactList);