import React from 'react';
import { connect } from 'react-redux';
import { depositCash, withdrawCash} from "../actions";



class factionCard extends React.Component {

    state = { moneyAmount: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        if(event === depositCash){ this.props.depositCash(this.state.moneyAmount); }
        if(event === withdrawCash){ this.props.withdrawCash(this.state.moneyAmount); }

        this.setState({ moneyAmount: '' , balance:''});    
    }



    render(){
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"> User: {this.props.account.name} </h5> {/***kingdom name****/}
                    <p class="card-text"> Balance: {this.props.account.balance} </p> {/****kingdom balance*****/}
                    {/****<p class="card-text"> id: {this.props.account.id} </p>****/}
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label> Amount </label>
                            <input type="text" className="form-control"
                                   value={this.state.moneyAmount}
                                   onChange={(e) => this.setState({moneyAmount: e.target.value})}/>

                        </div>

                        <button type = "button"
                                onClick ={() => this.props.depositCash(this.props.account._id, this.state.moneyAmount)}
                                className = "btn btn-success">
                            Deposit
                        </button>

                        <button type = "button"
                                onClick = {() => this.props.withdrawCash(this.props.account._id, this.state.moneyAmount)}
                                className = "btn btn-danger">
                            Withdraw
                        </button>

                        <button type = "button"
                                onClick = {() => this.props.removeAccount(this.props.account)}
                                className = "btn btn-warning">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, {depositCash, withdrawCash})(factionCard);