//App.js will have react-router

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

class App extends React.Component {             //if made into a class component, then able to  use getData & axios calls
                                                //but unable to use react router
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
        this.getData();                         //if made into a functional component, then able to use react router
    }


    getData() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
            this.props.tasksError();
        });

        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
            .then(response => {
                this.props.setTransactions(response.data);
            }).catch(error => {
            this.props.tasksError();
        });
    }

    /****
     sortAccounts(_id)       //sort by Account name
     {
    }
     *****/
    //something nicely is cooking and sizzling here
    /****
     sortTransactions(accountId)   //sort by id & name
     {
         transaction = accountId.filter( transacid => transacid === <VariablePage/>>)
     }
     ****/

    render(){
        const {view} = this.state;

        return (
            <div>
                <BrowserRouter>
                    <PageTabs/>
                    <div>

                        <Route path="/" exact component={AccountsList}/>
                        <Route path="/page2" component={TransactList}/>
                        <Route path="/page3" component={AddAccount}/>
                        <Route path="/page/:id" component={VariablePage}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {                    //what gets mapped here will be returned to the properties of the component
    return {
        errorMessage: state.errors.getAccounts//had get Tasks
    };
}


export default connect(mapStateToProps, {setAccounts, setTransactions, tasksError})(App);
