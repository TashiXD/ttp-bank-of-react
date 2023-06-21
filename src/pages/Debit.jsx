import React, { useEffect, useState } from "react";
import Display from "../components/Display/Display";
const Debit = ({debit, setDebit, debitHistory, setDebitHistory}) => {
const [date, setDate] = useState(new Date());
// //adding to arr
//   const addToHistory=()=>{
//     const newTransaction = {
//         amount: amount,
//         description: description,
//         time: date.toLocaleTimeString()
//       };
//     setHistory([...history, newTransaction]);
//   }
  //this sets date
  useEffect(() => {
    setDate(new Date());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents default form to be submitted
    // Getting the values from the input fields
    const enteredAmount = parseInt(event.target.amountEntered.value);
    const enteredDescription = event.target.descriptionEntered.value;

    if (enteredAmount && enteredDescription) {
        // Update the debit value in the parent component
        setDebit(debit - enteredAmount);
    
        // Create a new transaction object
        const newTransaction = {
          amount: enteredAmount,
          description: enteredDescription,
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
    <div>
      <h1>Debit</h1>
      <form onSubmit={handleSubmit}>
        <input  type="number" name="amountEntered" placeholder="Enter Amount" /><br/>
        <input type="text" name="descriptionEntered" placeholder="Enter description"/><br/>
        <input type="submit" value="Submit" />
      </form>
      <div className="display">
        {console.log(debit)}
        <Display debitHistory={debitHistory}/>
      </div>
    </div>
  );
};

export default Debit;
