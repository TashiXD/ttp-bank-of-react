import React, { useEffect } from "react";
import Display from "../components/Display/Display";

const Debit = ({debit, setDebit, debitHistory, setDebitHistory, date, setDate}) => {

  //this sets date
  useEffect(() => {
    setDate(new Date());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents default form to be submitted
    // Getting the values from the input fields
    const enteredAmount = parseFloat(event.target.amountEntered.value);
    const enteredDescription = event.target.descriptionEntered.value;

    if (enteredAmount && enteredDescription) {
        // Update the debit value in the parent component
        setDebit(debit + enteredAmount);
    
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
    <div>
      <h1>Debit Balance: ${debit}</h1>
      <form onSubmit={handleSubmit}>
        <input  type="float" name="amountEntered" placeholder="Enter Amount to add" /><br/>
        <input type="text" name="descriptionEntered" placeholder="Enter description"/><br/>
        <input type="submit" value="Submit" />
      </form>
      <div className="display">
        <Display history={debitHistory}/>
      </div>
    </div>
  );
};

export default Debit;
