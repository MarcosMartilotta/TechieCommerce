import './productCard.scss';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ img, alt, description, price }) => {
  const navigate = useNavigate();

  return (
    <div className="productCard">
      <figure onClick={() => navigate('product/id')}>
        <img src={img} alt={alt} />
      </figure>
      <h2 onClick={() => navigate('/product/id')}>{description}</h2>
      <span>{price}</span>
      <button>AGREGAR AL CARRITO</button>
    </div>
  );
};

export default ProductCard;
