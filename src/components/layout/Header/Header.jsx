

// import TopBar from "./TopBar";
// import NavBar from "./NavBar";

// const Header = () => {
//   return (
//     <header className="w-full">
//       {/* Top info bar */}
//       <TopBar />

//       {/* Main navigation bar */}
//       <NavBar />
//       <hr className=" border-0 h-px bg-gradient-to-r from-transparent via-[#D4C78A]/40 to-transparent blur-[0.3px]" />

//     </header>
//   );
// };

// export default Header;


import TopBar from "./TopBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-999">
      {/* Top info bar */}
      <TopBar />

      {/* Main navigation bar */}
      <NavBar />

      {/* Decorative line */}
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#D4C78A]/40 to-transparent blur-[0.3px]" />
    </header>
  );
};

export default Header;
