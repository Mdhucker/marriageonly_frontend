import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { languages } from "../../content"; // centralized language object

const Footer = () => {
  const { lang } = useLanguage();

  // Get footer content from centralized languages object
  const content = languages[lang]?.footer || languages.en.footer;

  return (
    <footer className="py-20 border-t border-[#D4C78A]/20 bg-[#0F1710]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-16">

          {/* Column 1: Need Help? */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">
              {content.needHelp}
            </h3>
            <ul className="space-y-3 text-sm text-[#F5F5F0]/80">
              {content.helpLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-[#D4C78A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">
              {content.company}
            </h3>
            <ul className="space-y-3 text-sm text-[#F5F5F0]/80">
              {content.companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-[#D4C78A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Privacy & You */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">
              {content.privacy}
            </h3>
            <ul className="space-y-3 text-sm text-[#F5F5F0]/80">
              {content.privacyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-[#D4C78A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: More */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">
              {content.more}
            </h3>
            <ul className="space-y-3 text-sm text-[#F5F5F0]/80">
              {content.moreLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-[#D4C78A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: App Download & Social */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold text-[#D4C78A] mb-6 uppercase tracking-wide">
              {content.getApp}
            </h3>
            <div className="flex flex-col gap-4 mb-8">
              {content.appLinks.map((app, i) => (
                <a
                  key={i}
                  href={app.href}
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {app.icon}
                  <div>
                    <div className="text-xs">{app.small}</div>
                    <div className="text-lg font-semibold">{app.label}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-5 justify-center lg:justify-start">
              {content.social.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-[#D4C78A] hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-[#D4C78A]/10 text-center text-sm text-[#F5F5F0]/60">
          <p>{content.copyright}</p>
          <p className="mt-3 text-[#D4C78A]/80">{content.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
