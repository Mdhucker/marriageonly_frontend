
import enNavBar from "./Header/NavBar/en";
import swNavBar from "./Header/NavBar/sw";
import enTopBar from "./Header/TopBar/en";
import swTopBar from "./Header/TopBar/sw";

import enFooter from "./Footer/en";
import swFooter from "./Footer/sw";

import enHero from "./Home/HeroSection/en";
import swHero from "./Home/HeroSection/sw";

import enExper from "./Home/Experience/en";
import swExper from "./Home/Experience/sw";

import enLegacy from "./Home/Legacy/en";
import swLegacy from "./Home/Legacy/sw";

import enFAQ from "./Home/FAQ/en";
import swFAQ from "./Home/FAQ/sw";

import enExplore from "./Home/Explore/en";
import swExplore from "./Home/Explore/sw";

import enFeatures from "./Home/Features/en"; // ✅ add Features
import swFeatures from "./Home/Features/sw"; // ✅ add Features

import enStrictPolicy from "./Home/StrictPolicy/en";
import swStrictPolicy from "./Home/StrictPolicy/sw";


import enInfo from "./Home/InfoToast/en";
import swInfo from "./Home/InfoToast/sw";

export const languages = {
  en: {
    navBar: enNavBar,
    topBar: enTopBar,
    footer: enFooter,
    hero: enHero,
    experience: enExper,
    Legacy: enLegacy,
    faq: enFAQ, 
    explore: enExplore,
    features: enFeatures, 
     strictPolicy: enStrictPolicy,
    infoToast: enInfo,


  },
  sw: {
    navBar: swNavBar,
    topBar: swTopBar,
    footer: swFooter,
    hero: swHero,
    experience: swExper,
    Legacy: swLegacy,
    faq: swFAQ, 
    explore: swExplore,
    features: swFeatures,
    strictPolicy: swStrictPolicy,
    infoToast: swInfo,

  },
};
