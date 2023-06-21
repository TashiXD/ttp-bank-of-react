import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();

  //navigate to debit page
  const navigateToDebit = () =>{
    navigate("/userProfile/debit");
  }
  //navigate to credit page
  const navigateToCredit = () =>{
    navigate("/userProfile/credit");
  }
  return (
    <div>
      <h1>Home</h1>
      <div className="view">
        <button className="button" onClick={navigateToDebit}>Debit</button>
        <button className="button" onClick={navigateToCredit}>Credit</button>
      </div>
    </div>
  )
}

export default Home;
