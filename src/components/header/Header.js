import React, { useEffect, useState } from "react";
import headerCSS from "./Header.module.css";

const Header = function () {
  return (
    <header>
       <div className={headerCSS.alert}>
       Want to fix collaboration at your company? Here’s what 9,615 people have to say.
       </div>
      <div className={headerCSS.header}>
        <div className={headerCSS.logo}>
          <div className={headerCSS.logoName}>ASANA CLONE</div>
          <div className={headerCSS.navLinks}>
            <span className={headerCSS.link}>
              <a href="#">Why Asana?</a>
            </span>
            <span className={headerCSS.link}>
              <a href="#">Features</a>
            </span>
            <span className={headerCSS.link}>
              <a href="#">Resources</a>
            </span>
            <span className={headerCSS.link}>
              <a href="#">Enterprise</a>
            </span>
            <span className={headerCSS.link}>
              <a href="#">Pricing</a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
