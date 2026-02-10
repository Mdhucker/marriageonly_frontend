// import { useState } from 'react'
// import Home from "./pages/Home/Home";
// import MembershipForm from "./pages/MembershipForm/MembershipForm";
// import { Routes, Route } from "react-router-dom";

// function App() {

//   return (
//     <>
   
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/membershipForm" element={<MembershipForm />} />
//     </Routes>
//     </>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MembershipForm from "./pages/MembershipForm/MembershipForm";
import { LanguageProvider } from "./context/LanguageContext"; // <-- import your provider

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membershipForm" element={<MembershipForm />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
