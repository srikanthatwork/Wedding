// import React from "react";
// import { Link } from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import MobileMenu from "../../components/MobileMenu";

// import "./style.css";

// const Header = () => {
//   return (
//     <div className="Header_root">
//         <div className="header">
//           <div className="container">
//             <div className="row">
//               <div className="header">
//                 <div className="align-items-center d-flex justify-content-between">
//                   <div className="logo">
//                     <h2>
//                       Naga Sravya
//                       <span style={{ color: "red" }}>❤️</span>
//                       {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
//                       Anantha Sai
//                     </h2>
//                   </div>
//                 </div>

//                 <div className="">
//                   <div className="header-menu d-lg-block d-none">
//                     <ul className="mobail-menu d-flex">
//                       <li>
//                         <Link to="#">Home </Link>

//                       </li>
//                       <li>
//                         <AnchorLink href="#couple">Couple</AnchorLink>
//                       </li>
//                       <li>
//                         <AnchorLink href="#story">Story</AnchorLink>
//                       </li>
//                       <li>
//                         <AnchorLink href="#people">People</AnchorLink>
//                       </li>
//                       <li>
//                         <AnchorLink href="#event">Events</AnchorLink>
//                       </li>
//                       <li>
//                         <AnchorLink href="#gallery">Gallery</AnchorLink>
//                       </li>
//                       <li>
//                         <AnchorLink href="#rsvp">Invitation</AnchorLink>
//                       </li>
//                       {/* <li>
//                         <Link to="#">Blog</Link>
//                         <ul className="submenu submenu2">
//                           <li>
//                             <Link to="/blog">Blog</Link>
//                           </li>
//                           <li>
//                             <Link to="/Blog-details">Blog Details</Link>
//                           </li>
//                         </ul>
//                       </li> */}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="header-logo">
//                   <img
//                     src="https://www.vlacksolutions.com/assets/logoVlack-Bm2dxtqi.png"
//                     alt="logo"
//                     className="vlack-logo"
//                   />
//                   <strong>Vlack Solutions Pvt Ltd</strong>
//                 </div>
//               </div>
//               <div className="" style={{ marginTop: "20px" }}>
//                 <MobileMenu />
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MobileMenu from "../../components/MobileMenu";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" >
          <h2 className="logo-text">
            Naga Sravya <span style={{ color: "red" }}>❤️</span> Anantha Sai Ram
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-menu d-none d-lg-block">
          <ul className="mobail-menu d-flex">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <AnchorLink href="#couple">Couple</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#story">Story</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#people">People</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#event">Events</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#gallery">Gallery</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#rsvp">Invitation</AnchorLink>
            </li>
          </ul>
        </nav>

        <div className="header-logo">
          <img
            src="https://www.vlacksolutions.com/assets/logoVlack-Bm2dxtqi.png"
            alt="logo"
            className="vlack-logo"
          />
          {/* <strong>Vlack Solutions Pvt Ltd</strong> */}
        </div>

        {/* Mobile Menu */}
        <div className="d-block d-lg-none mt-2">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import MobileMenu from "../../components/MobileMenu";
// import "./style.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="container d-flex align-items-center justify-content-between">
//         {/* Logo */}
//         <div className="logo">
//           <h2>
//             Naga Sravya <span style={{ color: "red" }}>❤️</span> Anantha Sai Ram
//           </h2>
//         </div>

//         {/* Desktop Menu */}
//         <div className="header-menu d-none d-lg-block">
//           <ul className="mobail-menu d-flex">
//             <li>
//               <Link to="#">Home</Link>
//             </li>
//             <li>
//               <AnchorLink href="#couple">Couple</AnchorLink>
//             </li>
//             <li>
//               <AnchorLink href="#story">Story</AnchorLink>
//             </li>
//             <li>
//               <AnchorLink href="#people">People</AnchorLink>
//             </li>
//             <li>
//               <AnchorLink href="#event">Events</AnchorLink>
//             </li>
//             <li>
//               <AnchorLink href="#gallery">Gallery</AnchorLink>
//             </li>
//             <li>
//               <AnchorLink href="#rsvp">Invitation</AnchorLink>
//             </li>
//           </ul>
//         </div>

//         {/* Mobile Menu */}
//         <div className="mobile-menu d-block d-lg-none">
//           <MobileMenu />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
