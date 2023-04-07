import './productCard.scss'

const ProductCard = ({ img, alt, description, price }) => {
  return (
    <div className="productCard">
      <figure>
        <img src={img} alt={alt} />
      </figure>
      <p>{description}</p>
      <span>{price}</span>
      <button>AGREGAR AL CARRITO</button>
    </div>
  )
}

export default ProductCard
