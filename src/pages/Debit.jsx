import React, { useEffect } from "react";
import { Display, Form } from "../components";
import "./transaction.css"
const Debit = ({debit, setDebit, debitHistory, setDebitHistory, date, setDate}) => {

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents default form to be submitted
    // Getting the values from the input fields
    const enteredAmount = parseFloat(event.target.amountEntered.value);
    const enteredDescription = event.target.descriptionEntered.value;

    if (enteredAmount && enteredDescription) {
        // Update the debit value in the parent component
        setDebit(debit + enteredAmount);
        setDate(new Date());
        // Create a new transaction object
        const newTransaction = {
          amount: enteredAmount,
          description: enteredDescription,
          date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
          time: date.toLocaleTimeString(),
        };
    
        // Add the new transaction to the history
        setDebitHistory([...debitHistory, newTransaction]);
    
        // Clear the input fields
        event.target.amountEntered.value = "";
        event.target.descriptionEntered.value = "";
      }
  };

  return (
    <div className="main">
      <h1>Debit Balance: ${debit}</h1>
      <Form handleSubmit={handleSubmit}/>
      <h2>Transaction History</h2>
      <div className="display">
        <Display history={debitHistory}/>
      </div>
    </div>
  );
};

export default Debit;
