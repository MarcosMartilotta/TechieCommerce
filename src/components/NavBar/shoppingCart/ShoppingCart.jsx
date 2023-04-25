import { Link } from 'react-router-dom';
import './shoppingCart.scss';
import CardOfCart from './CardOfCart/CardOfCart';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const products = useSelector((state) => state.cart.products);
  let total = 0;
  products.map((product) => {
    total += product.quantity * product.price;
  });

  return (
    <div className="shoppingCart">
      <div className="cardsContainer">
        {products.length > 0 ? (
          <div className="productCardCart">
            {products?.map((product) => (
              <CardOfCart key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="noProductsText">
            Seleccione productos para que aparezcan en el carrito!
          </div>
        )}
      </div>

      <div className="total">
        <span>Total ${total}</span>
        <div></div>
        <Link to="/">Ir a pagar</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
