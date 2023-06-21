import React, { useEffect, useState } from "react";

const UserProfile = (props) => {
    const[total, setTotal] = useState(0);

  useEffect(()=>{
    function calculateTotal(){
        setTotal(props.credit-props.debit)
    }

    calculateTotal();
  })
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
        <h2>Debit: ${props.debit}</h2>
        <h2>Credit: ${props.credit}</h2>
        <h2>Total Balance: ${total}</h2>
      </div>
    </div>
  );
};

export default UserProfile;
