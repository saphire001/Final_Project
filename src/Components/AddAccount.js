import React from 'react';
import { connect } from 'react-redux';

import { addAccount, addStartingBalance } from "../actions";

class AddAccount extends React.Component{
    state = { newAc: '', newBalance: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addAccount(this.state.newAc);
        this.setState({ newAc: ''})
    };

    render(){
        return(
            <form className = "form-group" onSubmit = {this.onFormSubmit}>
                <h3> Register User Account </h3>
                <label htmlFor="newAc"> Kingdom Name </label>
                <input type = "text" className = "form-control"
                       name = "newAc"
                       value = {this.state.newAc}
                       onChange={(e) => this.setState({newAc: e.target.value})}/>
                <label htmlFor="newBal"> Starting Balance </label>
                <input type = "text" className = "form-control"
                       name = "newBal"
                       value = {this.state.newBal}
                       onChange={(e) => this.setState({newBal: e.target.value})}/>
                <button className = "btn btn-success" value = "submit">Register</button>
            </form>
        );
    }
}

export default connect(null, {addAccount, addStartingBalance})(AddAccount);