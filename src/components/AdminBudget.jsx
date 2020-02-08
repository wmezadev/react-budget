import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const AdmindBudget = ({budget, balance}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className="alert ">
                Balance: $ {balance}
            </div>
        </Fragment>
     );
}

AdmindBudget.prototype = {
    balance: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired
}
 

export default AdmindBudget;