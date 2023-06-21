import React from "react";
import './display.css';
function Display({history}) {
  return (
    <div className="Display">
      {/**Prints out the history in a formate form */}
      {history.map((transaction, index) => (
        <div key={index} className="history">
          <h4>Amount: ${transaction.amount}</h4>
          <h4>Description: {transaction.description}</h4>
          <h4>{transaction.date} at {transaction.time}</h4>
        </div>
      ))}
    </div>
  );
}
export default Display;
