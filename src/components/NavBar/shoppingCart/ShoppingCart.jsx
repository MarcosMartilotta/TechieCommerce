import { Link } from 'react-router-dom';
import './shoppingCart.scss';
import CardOfCart from './CardOfCart/CardOfCart';

const ShoppingCart = () => {
  return (
    <div className="shoppingCart">
      <CardOfCart />
      <CardOfCart />
      <CardOfCart />
      <CardOfCart />
      <div className="total">
        <span>Total $5000</span>
        <div></div>
        <Link to="/">Ir a pagar</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
