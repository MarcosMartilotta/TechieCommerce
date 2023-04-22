import './cardOfCart.scss';
import { removeItem } from '../../../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const CardOfCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <article className="cardOfCart">
      <figure className="productImage">
        <img src={product.img} alt="" />
      </figure>
      <div className="titleAndPrice">
        <h3>{product.title}</h3>
        <p>${product.price * product.quantity}</p>
      </div>
      {/* multiplicar el precio base por quantuty */}
      <div className="addOrRemove">
        <button
          className="takeOut"
          onClick={() => dispatch(removeItem(product.id))}
        >
          Quitar
        </button>
        <div className="moreOrLess">
          <button>-</button>
          <span>{product.quantity}</span>
          <button>+</button>
        </div>
      </div>
    </article>
  );
};

export default CardOfCart;
