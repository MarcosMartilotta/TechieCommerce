import './cardOfCart.scss';

const CardOfCart = ({ img, title, quantity, price }) => {
  return (
    <article className="cardOfCart">
      <figure className="productImage">
        <img src="" alt="" />
      </figure>
      <div className="titleAndPrice">
        <h3>Title</h3>
        <p>$5000</p>
      </div>
      {/* multiplicar el precio base por quantuty */}
      <div className="addOrRemove">
        <button className="takeOut">Quitar</button>
        <div className="moreOrLess">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </article>
  );
};

export default CardOfCart;
