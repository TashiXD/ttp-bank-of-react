import React from "react";

function Display({history}) {
  return (
    <div>
      {history.map((transaction, index) => (
        <div key={index}>
          <h4>Amount: ${transaction.amount}</h4>
          <h4>Description: {transaction.description}</h4>
          <h4>{transaction.date} at {transaction.time}</h4>
        </div>
      ))}
    </div>
  );
}
export default Display;
