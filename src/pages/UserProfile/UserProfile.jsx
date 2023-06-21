import React, { useEffect, useState } from "react";
import "./userprofile.css";
const UserProfile = (props) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function calculateTotal() {
      setTotal(props.credit - props.debit);
    }

    calculateTotal();
  });
  return (
    <div>
      {/*Account card that will display
        all the information related to the account like:
        Acount Number, 
        username,
        debit balance,
        credit balance, 
        total balance */}
      <div className="account-card">
        <h1>Account Info</h1>
        <div className="info">
          <p><span>Account Number</span>: {props.accountNum}</p>
          <p><span>Username</span>: {props.user}</p>
          <p><span>Debit</span>: ${props.debit}</p>
          <p><span>Credit</span>: ${props.credit}</p>
          <p><span>Total Balance</span>: ${total}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
