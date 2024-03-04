import { useState } from "react";

import headerImg from './assets/investment-calculator-logo.png';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput]  = useState({
    initialInvestment: 10000,
    annualInvestment: 50000,
    expectedReturn: 8,
    duration: 10

});

const isValidInput = userInput.duration >= 1;

function handleInputChange(inputIdentifier, newValue) {
    setUserInput(prevInput => {
        return {
            ...prevInput,
            [inputIdentifier]: +newValue
        }
    });
}

  return (
    <>
      <Header logoImg={headerImg} />
      <UserInput onChange={handleInputChange} userInput={userInput} />
      {isValidInput ? <Results userInput={userInput} /> : <p className="center">
        Please enter a duration of 1 years or more...
        </p>}
      
    </>
    
  )
}

export default App
