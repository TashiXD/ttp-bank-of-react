import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import components
import Navbar from "./components/Navbar";
//import pages
import { Credit, Debit, Home, UserProfile } from "./pages";
function App() {
  const [user, setUser] = useState("Tashi");
  const [accountNum, setAccountNum] = useState("123456789");
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    async function fetchData() {
      //get and set debit which is fetched from the api
      const debitResponse = await axios.get(
        "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
      );
      setDebit(debitResponse.data);

      //get and set debit which is fetched from the api
      const creditResponse = await axios.get(
        "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits"
      );
      setCredit(creditResponse.data);
    }
    fetchData();
  });
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <Navbar />
      </div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/userProfile/*"
          element={
            <UserProfile
              user={user}
              accountNum={accountNum}
              debit={debit}
              credit={credit}
            />
          }
        />
        <Route path="/userProfile/debit" element={<Debit debit={debit} setDebit={setDebit}/>} />
        <Route path="/userProfile/credit" element={<Credit credit={credit} setCredit={setCredit} />} />
      </Routes>
    </Router>
  );
}

export default App;
