import { useState } from 'react'
import Home from "./pages/Home/Home";
import MembershipForm from "./pages/MembershipForm/MembershipForm";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/membershipForm" element={<MembershipForm />} />
    </Routes>
    </>
  )
}

export default App

