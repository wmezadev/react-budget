import React, { useState } from 'react';
import Error from './Error'

const Form = () => {

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
 
export default Form;