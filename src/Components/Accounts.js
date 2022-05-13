import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './account.css';

class Accounts extends React.Component {

  state = { currentPage: '/' }

  isActiveTab(tabName) {
    return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
  }

  onTabClick(event, tabName) {
    this.setState({ currentPage: tabName })
  }

  render(){
    return (
        <div class="card" style={{width:"450px;", position:"relative;", margin:"50px;"}}>
            <div class="card-body">
                <h5 class="card-title">
                    Name: {this.props.account.name}
                </h5>
                <p class="card-text">
                    ID: {this.props.account._id}
                </p>
                <p class="card-text">
                    Balance: ${this.props.account.balance}
                </p>
                <p><Link className={this.isActiveTab('/page/:id')} to={"/page/"+ this.props.account._id} onClick={event => this.onTabClick(event, '/page/:id')}>
                    <button type="button" class="btn btn-primary btn-sm">Account Details</button>
                </Link></p>
            </div>
        </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    state
  };
}

export default connect(mapStateToProps)(Accounts);