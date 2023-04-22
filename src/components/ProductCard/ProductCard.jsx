import './productCard.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../redux/cartReducer';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  return (
    <article className="productCard">
      <figure onClick={() => navigate(`/product/${product.id}`)}>
        <img
          src={
            import.meta.env.VITE_UPLOAD_URL +
            product.attributes.img.data.attributes.url
          }
          alt=""
        />
      </figure>
      <h2
        className="cardTitle"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {product.attributes.title}
      </h2>
      <span>$ {product.attributes.price}</span>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: product.id,
              title: product.attributes.title,
              img:
                import.meta.env.VITE_UPLOAD_URL +
                product.attributes.img.data.attributes.url,
              price: product.attributes.price,
              quantity: quantity,
            }),
          )
        }
      >
        AGREGAR AL CARRITO
      </button>
    </article>
  );
};

export default ProductCard;
