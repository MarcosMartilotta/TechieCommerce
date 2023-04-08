import './product.scss';
import imagen from '../../assets/Auricular1/D_NQ_NP_621706-MLA40186103035_122019-O.webp';
const Product = () => {
  return (
    <section className="product">
      <section className="left">
        <div className="allImagesContainer">
          <figure>
            <img src={imagen} alt="" />
          </figure>
          <figure>
            <img src={imagen} alt="" />
          </figure>
          <figure>
            <img src={imagen} alt="" />
          </figure>
          <figure>
            <img src={imagen} alt="" />
          </figure>
        </div>
        <div className="selectedImage">
          <figure>
            <img src={imagen} alt="" />
          </figure>
        </div>
      </section>
      <section className="right">
        <h2>Auriculares gamer HyperX Cloud II KHX-HSCP rojo</h2>
        <p className="price">$50000</p>
        <p className="description">
          ¡Experimentá la adrenalina de sumergirte en la escena de otra manera!
          Tener auriculares específicos para jugar cambia completamente tu
          experiencia en cada partida. Con los HyperX Cloud II no te perdés
          ningún detalle y escuchás el audio tal y como fue diseñado por los
          creadores. El formato perfecto para vos El diseño over-ear brinda una
          comodidad insuperable gracias a sus suaves almohadillas. Al mismo
          tiempo, su sonido envolvente del más alto nivel se convierte en el
          protagonista de la escena.
        </p>
        <div className="addOrLess">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
        <button className="addToChart">Agregar al carrito</button>
        <button className="goToPay">Ir a pagar</button>
      </section>
    </section>
  );
};

export default Product;
