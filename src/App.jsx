
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MembershipForm from "./pages/MembershipForm/MembershipForm";
import { LanguageProvider } from "./context/LanguageContext"; // <-- import your provider
import BrowseProfiles from "./pages/BrowseProfiles/BrowseProfiles";
import ProfileView from "./pages/ProfileView/ProfileView"; // individual profile page
import AboutUs from "./pages/AboutUs/AboutUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
// import AuthSuccess from "./pages/AuthSuccess/AuthSuccess";
import AuthSuccess from "./pages/AuthSuccess/AuthSuccess";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membershipForm" element={<MembershipForm />} />

               {/* Browse BrowseProfilesprofiles page, optional ?gender param */}
        <Route path="/browse-profiles" element={<BrowseProfiles />} />

        {/* Individual profile view */}
        <Route path="/profile/:id" element={<ProfileView />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/auth/success" element={<AuthSuccess />} />

      </Routes>
    </LanguageProvider>
  );
}

export default App;
