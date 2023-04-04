import { useState } from "react";
import useMobile from "../../hooks/useWidthSize";
import shoppingCart from "./assets/icons/carrito48p.png";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import "./navBar.scss";

const NavBar = () => {
  const { isMobile } = useMobile();
  return (
    <nav>
      {isMobile ? <MobileNav /> : <DesktopNav />}
      <h1>TECHIESTORE</h1>
      <figure>
        <img
          src={shoppingCart}
          alt="shopping Cart"
        />
      </figure>
    </nav>
  );
};

export default NavBar;
