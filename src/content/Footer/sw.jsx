// content/Footer/sw.jsx
import { Globe, Heart, Users } from "lucide-react";

const sw = {
  needHelp: "Unahitaji Msaada?",
  helpLinks: [
    { href: "#", label: "Ingia Kama Mwanachama" },
    { href: "/membershipForm", label: "Jiandikishe" },
    { href: "#", label: "Tafuta Mwenzi" },
    { href: "#", label: "Jinsi ya Kutumia Ndoa Africa" },
    { href: "#", label: "Uanachama wa Premium" },
    { href: "#", label: "Huduma kwa Wateja" },
    { href: "#", label: "Ramani ya Tovuti" },
  ],
  company: "Kampuni",
  companyLinks: [
    { href: "#", label: "Kuhusu Sisi" },
    { href: "#", label: "Blogu ya NDOA" },
    { href: "#", label: "Ajira" },
    { href: "#", label: "Tuzo na Utambuzi" },
    { href: "#", label: "Wasiliana Nasi" },
  ],
  privacy: "Faragha & Wewe",
  privacyLinks: [
    { href: "#", label: "Masharti ya Matumizi" },
    { href: "#", label: "Sera ya Faragha" },
    { href: "#", label: "Kuwa Salama Mtandaoni" },
    { href: "#", label: "Ripoti Matumizi Mabaya" },
  ],
  more: "Zaidi",
  moreLinks: [
    { href: "#", label: "Uanachama wa VIP" },
    { href: "#", label: "Hadithi za Mafanikio" },
    { href: "#", label: "Matukio & Mikutano" },
    { href: "#", label: "Huduma kwa Diaspora" },
  ],
  getApp: "Pakua App",
  appLinks: [
    {
      href: "#",
      icon: <Globe size={24} />,
      small: "PAKUA KATIKA",
      label: "Google Play",
    },
    {
      href: "#",
      icon: <Heart size={24} />,
      small: "Pakua kwenye",
      label: "App Store",
    },
  ],
  social: [
    { href: "#", icon: <Globe size={24} /> },
    { href: "#", icon: <Heart size={24} /> },
    { href: "#", icon: <Users size={24} /> },
  ],
  copyright: `© ${new Date().getFullYear()} Ndoa Africa • Jukwaa Kuu la Ndoa za Kikamilifu Barani Afrika`,
  tagline: "Imetengenezwa kwa moyo wote kwa ndoa zenye maana na zinazotegemea imani",
};

export default sw;
