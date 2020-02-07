import React, { Fragment, useState } from 'react'

const Question = () => {

    const [ quantity, setQuantity ] = useState(0)

    const [ error, setError] = useState(false)

    const setBudget = e => {
        setQuantity(parseInt(e.target.value))
    }

    const addBudget = e => {
        e.preventDefault();

        if(quantity < 1 || isNaN(quantity)) {
            setError(true)
            return
        }

        setError(false)
    }

    return ( 
        <Fragment>
            <h2>Type your budget</h2>
            
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Type your budget"
                    onChange={setBudget}
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
 
export default Question