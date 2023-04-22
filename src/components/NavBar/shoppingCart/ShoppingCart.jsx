import { Link } from 'react-router-dom';
import './shoppingCart.scss';
import CardOfCart from './CardOfCart/CardOfCart';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ShoppingCart = () => {
  const products = useSelector((state) => state.cart.products);
  let total = 0;
  products.map((product) => {
    total += product.quantity * product.price;
  });
  return (
    <div className="shoppingCart">
      {products?.map((product) => (
        <CardOfCart key={product.id} product={product} />
      ))}
      <div className="total">
        <span>Total ${total}</span>
        <div></div>
        <Link to="/">Ir a pagar</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
