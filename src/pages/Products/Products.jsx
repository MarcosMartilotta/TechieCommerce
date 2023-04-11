import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import './products.scss';

const Products = () => {
  const [active, setActive] = useState(false);
  const { data, loading, error } = useFetch(`/products?populate=*`);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const dropDown = () => {
    setActive(!active);
  };
  return (
    <section className="products">
      <h2>PRODUCTOS</h2>
      <section className="left">
        <form action="">
          <input type="text" name="" id="" />
        </form>
        <p onClick={dropDown}>
          Filtrar <span>{'>'}</span>{' '}
        </p>
        <section
          className={active ? 'filterContainer active' : 'filterContainer'}
        >
          <h3>RANGO DE PRECIO</h3>
          <form action="">
            <input type="text" />
          </form>
          <hr />
          <h3>ORDENAR POR</h3>
          <ul className="orderBy">
            <li>Más nuevo</li>
            <li>Mayor precio</li>
            <li>Menor precio</li>
            <li>Ofertas</li>
            <li>Marca A-Z</li>
          </ul>
        </section>
      </section>
      <section className="right">
        <section className="productsSection">
          {data ? (
            data.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </section>
    </section>
  );
};

export default Products;
