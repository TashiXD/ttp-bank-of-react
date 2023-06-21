import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = (props) => {
  const navigate = useNavigate();

  const navigateToDebit = () =>{
    navigate("/userProfile/debit");
  }

  const navigateToCredit = () =>{
    navigate("/userProfile/credit");
  }
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
        <h2>Debit: $</h2>
        <h2>Credit: $</h2>
        <h2>Total Balance: $</h2>
      </div>
      <div className="view">
        <button className="button" onClick={navigateToDebit}>Debit</button>
        <button className="button" onClick={navigateToCredit}>Credit</button>
      </div>
    </div>
  );
};

export default UserProfile;
