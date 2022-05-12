import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import VariablePage from "./VariablePage";
import { setAccounts } from "../actions";

class App extends React.Component {
    componentDidMount() {
        this.getData();
    }
    getData(){
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
                this.props.tasksError();
        });
    }
    render(){
        const { view } = this.state;
        switch (view) {
            case 'accounts':
                return (this.wrapPage(<Page1 />));
            case 'transactions':
                return (this.wrapPage(<Page2 />));
            case 'newaccount':
                return (this.wrapPage(<Page3/>));
            default:
                return (this.wrapPage(<h2>Please make a valid selection</h2>));
        }
    }
}

