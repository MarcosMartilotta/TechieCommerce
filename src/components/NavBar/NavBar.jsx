import { useState } from 'react';
import useMobile from '../../hooks/useWidthSize';
import shoppingCart from './assets/icons/carrito48p.png';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from './shoppingCart/ShoppingCart';
import './navBar.scss';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const { isMobile } = useMobile();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <nav>
      {isMobile ? <MobileNav /> : <DesktopNav />}
      <h1 onClick={() => navigate('/')}>TECHIESTORE</h1>
      <figure>
        <img
          src={shoppingCart}
          alt="shopping Cart"
          onClick={() => setActive(!active)}
        />
        <div>{products.length}</div>
      </figure>
      {active && <ShoppingCart />}
    </nav>
  );
};

export default NavBar;
