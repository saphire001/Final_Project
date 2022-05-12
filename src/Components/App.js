import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import PageTabs from './PageTabs';
import VariablePage from "./VariablePage";
import { setAccounts, setTransactions, tasksError} from "../actions";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import AccountsList from './AccountsList';
import AddAccount from './AddAccount';
import TransactFormatPage from './TransactFormatPage';
import TransactList from './TransactList';
import AccountAdded from './AccountAdded';

class App extends React.Component {            
                                                
    state = {
        view: {AccountsList},
        allAccounts: [],
        sortedTransactions: {
            name: [],
            amounts: []
        },
        sortedAccounts: {
            name: [],
            balance: []
        },
        errorText: ''
    }

    componentDidMount() {
        this.getData();                         
    }


    getData() {
        axios.get('https://my-json-server.typicode.com/ntaparia/Final_Project/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
            this.props.tasksError();
        });

        axios.get('https://my-json-server.typicode.com/ntaparia/Final_Project/transactions')
            .then(response => {
                this.props.setTransactions(response.data);
            }).catch(error => {
            this.props.tasksError();
        });
    }

    render(){
        const {view} = this.state;

        return (
            <div>
                <BrowserRouter>
                    <PageTabs/>
                    <div>

                        <Route path="/" exact component={AccountsList}/>
                        <Route path="/page2" component={TransactList}/>
                        <Route path="/page3" component={AccountAdded}/>
                        <Route path="/page/:id" component={VariablePage}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {                    
    return {
        errorMessage: state.errors.getAccounts
    };
}


export default connect(mapStateToProps, {setAccounts, setTransactions, tasksError})(App);
