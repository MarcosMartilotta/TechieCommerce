import '../products.scss';
import LazyListOfProducts from '../ListOfProducts/LazyListOfProducts/LazyListOfProducts';
import useMobile from '../../../hooks/useWidthSize';
const LazyProducts = () => {
  const { isMobile } = useMobile();

  return (
    <section className="products">
      <h2>PRODUCTOS</h2>
      <section className="left">
        <form action="">
          <input type="text" name="" id="" placeholder="Buscar" />
        </form>
        <p>
          Filtrar <span>{'>'}</span>{' '}
        </p>
        <section>
          {!isMobile ? (
            <>
              <h3>PRODUCTO</h3>
              <div className="category">
                <div className="lazyDiv"></div>
                <div className="lazyDiv"></div>
                <div className="lazyDiv"></div>
              </div>
              <hr />
              <h3>RANGO DE PRECIO</h3>
              <div className="priceRange">
                <div className="lazyDiv"></div>
              </div>
              <hr />
              <h3>ORDENAR POR</h3>
              <ul className="orderBy">
                <li>MÁS NUEVO</li>
                <li>MAYOR PRECIO</li>
                <li>OFERTAS</li>
                <li>MARCA A-Z</li>
              </ul>{' '}
            </>
          ) : (
            <></>
          )}
        </section>
      </section>
      <section className="right">
        <section className="productsSection">
          <LazyListOfProducts />
        </section>
      </section>
    </section>
  );
};

export default LazyProducts;
