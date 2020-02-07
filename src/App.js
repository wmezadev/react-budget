import React, { useState } from 'react';
import Question from './components/Question'
import Form from './components/Form'

function App() {

  // Set state
  const [ budget, setBudget ] = useState(0);
  const [ balance, setBalance ] = useState(0);
  const [ show_question, setShowQuestion ] = useState(true);
  const [ expenses, setExpenses] = useState([]);

  const addNewExpense = expense  => {
    setExpenses([
      ...expenses,
      expense
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="main-content content">
        {
          show_question 
          ?
            (
              <Question 
                setBudget={setBudget}
                setBalance={setBalance}
                setShowQuestion={setShowQuestion}
              />
            )
          :
           (
            <div className="row">
              <div className="one-half column">
                <Form
                  addNewExpense={addNewExpense}
                />
              </div>
              <div className="one-half column">

              </div>
            </div>
           )
        }
        </div>
      </header>
    </div>
  );
}

export default App;
