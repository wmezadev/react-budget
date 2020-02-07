import React, { useState } from 'react';
import Question from './components/Question'
import Form from './components/Form'

function App() {

  // Set state
  const [ budget, setBudget ] = useState(0);
  const [ balance, setBalance ] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="main-content content">
          <Question 
            setBudget={setBudget}
            setBalance={setBalance}
          />
          <div className="row">
            <div className="one-half column">
              <Form/>
            </div>
            <div className="one-half column"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
