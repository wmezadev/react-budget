import React, { Fragment } from 'react';

const Question = () => {
    return ( 
        <Fragment>
            <h2>Type your budget</h2>
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Type your budget"
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
 
export default Question;