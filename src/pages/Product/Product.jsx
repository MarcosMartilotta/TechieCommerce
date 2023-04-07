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
        <h2>Nombre del producto re largo con un poco de descripcion</h2>
        <p className="price">$50000</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
          quibusdam voluptas saepe possimus cumque autem placeat, sed minima
          consequatur, labore cum. Incidunt est qui dolor veritatis explicabo,
          ab error! Nobis. Quasi, sit quo! Error iste ut accusantium facere
        </p>
        <div>
          <div>+</div>
          <div>1</div>
          <div>-</div>
        </div>
        <button>Agregar al carrito</button>
        <button>Ir a pagar</button>
      </section>
    </section>
  );
};

export default Product;
