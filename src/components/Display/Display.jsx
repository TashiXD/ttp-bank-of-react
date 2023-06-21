import React from "react";
import './display.css';
function Display({history}) {
  return (
    <div className="Display">
      {/**Prints out the history in a formate form */}
      {history.map((transaction, index) => (
        <div key={index}>
          <h4>{transaction.date} at {transaction.time}</h4>
          <div className="history">
            <p><span>Amount:</span> ${transaction.amount}<br/><br/>
            <span>Description:</span><br/>{transaction.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Display;
