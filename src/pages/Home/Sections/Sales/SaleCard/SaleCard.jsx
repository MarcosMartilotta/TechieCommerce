import './saleCard.scss'

const SaleCard = ({ img, alt, description, price }) => {
  return (
    <div className="saleCard">
      <figure>
        <img src={img} alt={alt} />
      </figure>
      <p>{description}</p>
      <span>{price}</span>
      <button>AGREGAR AL CARRITO</button>
    </div>
  )
}

export default SaleCard
