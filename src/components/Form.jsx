import React from 'react';

const Form = () => {
    return ( 
        <form >
            <h2>Add your expenses here</h2>

            <div className="field">
                <label>Expense name</label>
                <input type="text" className="u-full-width" name="name" placeholder="E.g., Transportation"/>
            </div>
            <div className="field">
                <label>Expense value</label>
                <input type="number" className="u-full-width" name="value" placeholder="E.g., 300"/>
            </div>

            <button
                type="submit"
                className="button-primary u-full-width"
            >Add expense</button>
        </form>
     );
}
 
export default Form;