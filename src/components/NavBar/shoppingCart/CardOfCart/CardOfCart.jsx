import './cardOfCart.scss';
import { removeItem, addItem, lessItem } from '../../../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const CardOfCart = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product.quantity);

  return (
    <article className="cardOfCart">
      <figure className="productImage">
        <img src={product.img} alt="" />
      </figure>
      <div className="titleAndPrice">
        <h3>{product.title}</h3>
        <p>${product.price * product.quantity}</p>
      </div>
      <div className="addOrRemove">
        <button
          className="takeOut"
          onClick={() => dispatch(removeItem(product.id))}
        >
          Quitar
        </button>
        <div className="moreOrLess">
          <button onClick={() => dispatch(lessItem(product))}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => dispatch(addItem(product))}>+</button>
        </div>
      </div>
    </article>
  );
};

export default CardOfCart;
