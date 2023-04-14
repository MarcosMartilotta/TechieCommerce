import './productCard.scss';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="productCard">
      <figure onClick={() => navigate(`/product/${product.id}`)}>
        <img
          src={
            config.REACT_APP_UPLOAD_URL +
            product.attributes.img.data.attributes.url
          }
          alt=""
        />
      </figure>
      <h2 onClick={() => navigate('/product/id')}>
        {product.attributes.title}
      </h2>
      <span>$ {product.attributes.price}</span>
      <button>AGREGAR AL CARRITO</button>
    </div>
  );
};

export default ProductCard;
