
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MembershipForm from "./pages/MembershipForm/MembershipForm";
import { LanguageProvider } from "./context/LanguageContext"; // <-- import your provider
import BrowseProfiles from "./pages/BrowseProfiles/BrowseProfiles";
import ProfileView from "./pages/ProfileView/ProfileView"; // individual profile page

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

      </Routes>
    </LanguageProvider>
  );
}

export default App;
