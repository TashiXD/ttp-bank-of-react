import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import components
import Navbar from "./components/Navbar";
//import pages
import { Credit, Debit, Home, UserProfile } from "./pages";
function App() {
  return (
    <Router> 
    <div className="App">
      {/* Navigation */}
      <Navbar/>
    </div>
    {/* Routes */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userProfile/*" element={<UserProfile />} />
        <Route path="/userProfile/debit" element={<Debit />} />
        <Route path="/userProfile/credit" element={<Credit />} />
    </Routes>
    </Router>
  
  );
}

export default App;
