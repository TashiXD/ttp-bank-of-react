import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css";
function Home({user}) {
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
    <div className='home'>
      <h1 className='welcome'>Welcome to <span className='bank'>Bank of React</span></h1>
      <h1 className='user'>{user}</h1>
      <div className="view">
        <p>Check account type</p>
        <button className="button" onClick={navigateToDebit}>Debit</button>
        <button className="button" onClick={navigateToCredit}>Credit</button>
      </div>
    </div>
  )
}

export default Home;
