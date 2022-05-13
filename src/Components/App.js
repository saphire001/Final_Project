import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAccounts, setTransactions } from "../actions";
import PageTabs from './PageTabs';
import Page1 from './Page1';
import Page2 from './Page2';
import VariablePage from "./VariablePage";


class App extends React.Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
      .then(response => {
        this.props.setAccounts(response.data);
      });

    axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
      .then(response => {
        this.props.setTransactions(response.data);
      });

  }

  render() {
      return (
        <div>
          <BrowserRouter>
            <PageTabs />
            <div>
              <Route path="/" exact component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route path="/page/:id" component={VariablePage} />
            </div>
          </BrowserRouter>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
}

export default connect(mapStateToProps, { setAccounts, setTransactions })(App);