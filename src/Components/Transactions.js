import React from 'react';

const Transactions = props => {
  return (
      <div class="card" style={{width:"400px;", position:"relative;", margin:"50px;"}}>
          <div class="card-body">
              <h5 class="card-title">
                    ID of Transaction: {props.transaction._id}
              </h5>

              <p class="card-test">
                   ID of Account: {props.transaction.accountId}
              </p>

              <p class="card-text">
                  Memo: {props.transaction.name}
              </p>

              <p class="card-text">
                  Debit or Credit: {props.transaction.type}
              </p>

              <p class="card-text">
                  Amount: ${ props.transaction.amount}
              </p>
          </div>
      </div>
  )
};

export default Transactions;