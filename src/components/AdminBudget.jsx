import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { checkBudget } from '../helpers'
const AdmindBudget = ({budget, balance}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={checkBudget(budget, balance)}>
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