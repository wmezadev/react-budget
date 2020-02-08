import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Form = ({setExpense, setCreateExpense}) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false)

    const addExpense = e => {
        e.preventDefault()
        // validate
        if(quantity<1 || isNaN(quantity) || name.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        // create expense
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }
        setExpense(expense)
        setCreateExpense(true)
        // reset form
        setName('')
        setQuantity(0)


    }
    return ( 
        <form onSubmit={addExpense}>
            <h2>Add your expenses here</h2>
            { error ? <Error message="both fields are required o budget wrong!"/> : null}
            <div className="field">
                <label>Expense name</label>
                <input 
                    type="text" 
                    className="u-full-width" 
                    name="name" 
                    value={name}
                    placeholder="E.g., Transportation"
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Expense value</label>
                <input 
                    type="number" 
                    className="u-full-width" 
                    name="value" 
                    value={quantity}
                    placeholder="E.g., 300"
                    onChange={e => setQuantity(parseInt(e.target.value))}
                />
            </div>

            <button
                type="submit"
                className="button-primary u-full-width"
            >Add expense</button>
        </form>
     );
}
 

Form.prototype = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}

export default Form;