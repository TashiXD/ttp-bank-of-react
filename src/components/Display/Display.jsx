import React from "react";

function Display({ debitHistory }) {
  return (
    <div>
      {debitHistory.map((transaction, index) => (
        <div key={index}>
          <h4>Amount: ${transaction.amount}</h4>
          <h4>Description: {transaction.description}</h4>
          <h4>{transaction.time}</h4>
        </div>
      ))}
    </div>
  );
}
export default Display;
