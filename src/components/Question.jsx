import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({ setBudget, setBalance }) => {

    const [ quantity, setQuantity ] = useState(0)

    const [ error, setError] = useState(false)

    const saveBudget = e => {
        setQuantity(parseInt(e.target.value))
    }

    const addBudget = e => {
        e.preventDefault();

        if(quantity < 1 || isNaN(quantity)) {
            setError(true)
            return
        }

        setError(false)
        setBudget(quantity)
        setBalance(quantity)
    }

    return ( 
        <Fragment>
            <h2>Type your budget</h2>
            { error ? <Error message="Budget is wrong!"/> : null }
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Type your budget"
                    onChange={saveBudget}
                    value={quantity}
                />
                <button
                    type="submit"
                    className="button-primary u-full-width"
                >
                    Set budget
                </button>
            </form>
        </Fragment> 
    );
}

Question.prototype = {
    setBudget: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired
}
 
export default Question