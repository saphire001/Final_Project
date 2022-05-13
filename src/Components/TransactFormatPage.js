import React from 'react';

const TransactFormatPage = props => {

    return (
        <li>
            <h3 style={{float: 'left'}} > {props.transaction.name}</h3>
            <h3 style={{float: 'right'}}> ${props.transaction.amount}</h3>
        </li>
    )
};
export default TransactFormatPage