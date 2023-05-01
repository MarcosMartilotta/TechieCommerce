import './shoppingCart.scss';
import CardOfCart from './CardOfCart/CardOfCart';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../../makeRequest';

const ShoppingCart = () => {
  const stripePromise = loadStripe(
    'pk_test_51N07GgLdDzxUtXPkTAwNhItmuCDJLEdmGNICJiZ41mhMcT0UxuIXhghDQFeY7GkCVdNjDoUdfaUeU7fx6QOezUnv000Njy8imf',
  );
  const products = useSelector((state) => state.cart.products);
  let total = 0;
  products.map((product) => {
    total += product.quantity * product.price;
  });

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post('/orders', { products });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
        <p onClick={() => handlePayment()}>Ir a pagar</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
