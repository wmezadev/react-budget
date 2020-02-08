import React, { useState, useEffect } from 'react';
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import AdmindBudget from './components/AdminBudget';

function App() {

  // Set state
  const [ budget, setBudget ] = useState(0);
  const [ balance, setBalance ] = useState(0);
  const [ show_question, setShowQuestion ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ create_expense, setCreateExpense ] = useState(false);

  // Use Effect to update balance
  useEffect(() => {
    if(create_expense){
      setExpenses([
        ...expenses,
        expense
      ])
      // Calculate new balance
      const newBalance = balance - expense.quantity
      setBalance(newBalance)
      setCreateExpense(false)
    }
    // eslint-disable-next-line
  }, [expense]);


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
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List
                  expenses={expenses}
                />
                <AdmindBudget
                  budget={budget}
                  balance={balance}
                />
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
