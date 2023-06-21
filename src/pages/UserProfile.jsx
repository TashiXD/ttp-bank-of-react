import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = (props) => {
    const[total, setTotal] = useState(0);
  const navigate = useNavigate();

  //navigate to debit page
  const navigateToDebit = () =>{
    navigate("/userProfile/debit");
  }
  //navigate to credit page
  const navigateToCredit = () =>{
    navigate("/userProfile/credit");
  }

  useEffect(()=>{
    function calculateTotal(){
        setTotal(props.debit-props.credit)
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
      <div className="view">
        <button className="button" onClick={navigateToDebit}>Debit</button>
        <button className="button" onClick={navigateToCredit}>Credit</button>
      </div>
    </div>
  );
};

export default UserProfile;
