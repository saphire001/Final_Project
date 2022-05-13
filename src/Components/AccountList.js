import React from 'react';
import { connect } from 'react-redux';

import { removeAccount, withdrawCash, depositCash } from "../actions";

import FactionCard from "./FactionCard";

class accountsList extends React.Component {

    removeAccount = (accountName) => {
        this.props.removeAccount(accountName.id);           
    }


    render(){
        const userAccounts = this.props.accounts.map(accountName => {
            return <FactionCard
                account={accountName}
                key={accountName.id}
                removeAccount={this.removeAccount}/>
        });
        return(
            <ul className = "task-list list-group">
                { userAccounts }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}
export default connect(mapStateToProps, {depositCash, withdrawCash, removeAccount })(accountsList);