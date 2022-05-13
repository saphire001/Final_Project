import React from 'react';
import { connect } from 'react-redux';

import { removeAccount } from "../actions";

import TransactFormatPage from "./TransactFormatPage";

class TransactList extends React.Component {

    render(){
        const userTransacts = this.props.transacts.map(transaction  => {
            return <TransactFormatPage transaction={transaction} key={transaction.id}/>
        });
        return(
            <ul className = "task-list list-group">
                { userTransacts }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transacts : state.transacts
    };
}
export default connect(mapStateToProps)(TransactList);