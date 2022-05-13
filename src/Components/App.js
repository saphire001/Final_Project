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

class App extends React.Component {

    componentDidMount() {
        this.getData();                         
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

    render(){
        const {view} = this.state;

        return (
            <div>
                <BrowserRouter>
                    <PageTabs/>
                    <div>

                        <Route path="/" exact component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                        <Route path="/page3" component={Page3}/>
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