import React from 'react';

const Transactions = props => {
  return (
      <div class="card" style={{width:"400px;", position:"relative;", margin:"50px;"}}>
          <div class="card-body">
              <h5 class="card-title">
                    Transaction ID: {props.transactions._id}
              </h5>

              <p class="card-test">
                  Account ID: {props.transactions.accountId}
              </p>

              <p class="card-text">
                  Memo: {props.transactions.name}
              </p>

              <p class="card-text">
                  Type: {props.transactions.type}
              </p>

              <p class="card-text">
                  Amount: ${ props.transactions.amount}
              </p>
          </div>
      </div>
  )
};

export default Transactions;