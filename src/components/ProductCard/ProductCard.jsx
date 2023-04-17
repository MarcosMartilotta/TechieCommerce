import './productCard.scss';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
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
      <button>AGREGAR AL CARRITO</button>
    </article>
  );
};

export default ProductCard;
