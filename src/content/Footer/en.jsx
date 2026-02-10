// content/Footer/en.jsx
import { Globe, Heart, Users } from "lucide-react";

const en = {
  needHelp: "Need Help?",
  helpLinks: [
    { href: "#", label: "Member Login" },
    { href: "/membershipForm", label: "Sign Up" },
    { href: "#", label: "Partner Search" },
    { href: "#", label: "How to Use Ndoa Africa" },
    { href: "#", label: "Premium Memberships" },
    { href: "#", label: "Customer Support" },
    { href: "#", label: "Site Map" },
  ],
  company: "Company",
  companyLinks: [
    { href: "#", label: "About Us" },
    { href: "#", label: "NDOA Blog" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Awards & Recognition" },
    { href: "#", label: "Contact Us" },
  ],
  privacy: "Privacy & You",
  privacyLinks: [
    { href: "#", label: "Terms of Use" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Be Safe Online" },
    { href: "#", label: "Report Misuse" },
  ],
  more: "More",
  moreLinks: [
    { href: "#", label: "VIP Membership" },
    { href: "#", label: "Success Stories" },
    { href: "#", label: "Events & Meetups" },
    { href: "#", label: "Diaspora Services" },
  ],
  getApp: "Get the App",
  appLinks: [
    {
      href: "#",
      icon: <Globe size={24} />,
      small: "GET IT ON",
      label: "Google Play",
    },
    {
      href: "#",
      icon: <Heart size={24} />,
      small: "Download on the",
      label: "App Store",
    },
  ],
  social: [
    { href: "#", icon: <Globe size={24} /> },
    { href: "#", icon: <Heart size={24} /> },
    { href: "#", icon: <Users size={24} /> },
  ],
  copyright: `© ${new Date().getFullYear()} Ndoa Africa • The Leading Serious Matrimonial Platform in Africa`,
  tagline: "Passionately built for meaningful, faith-rooted unions",
};

export default en;
