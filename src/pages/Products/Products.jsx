import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import './products.scss';
import ListOfProducts from './ListOfProducts/ListOfProducts';
import LazyListOfProducts from './ListOfProducts/LazyListOfProducts/LazyListOfProducts';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sort, setSort] = useState('desc');
  const [active, setActive] = useState(false);
  const { data, loading, error } = useFetch(`/categories`);

  if (loading) {
    return <LazyListOfProducts />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const dropDown = () => {
    setActive(!active);
  };

  const handleCategory = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategory(
      isChecked
        ? [...selectedCategory, value]
        : selectedCategory.filter((item) => item !== value),
    );
  };

  const changeMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSort = () => {
    setSort(sort === 'desc' ? 'asc' : 'desc');
    console.log(sort);
  };
  return (
    <section className="products">
      <h2>PRODUCTOS</h2>
      <section className="left">
        <form action="">
          <input type="text" name="" id="" placeholder="Buscar" />
        </form>
        <p onClick={dropDown}>
          Filtrar <span>{'>'}</span>{' '}
        </p>
        <section
          className={active ? 'filterContainer active' : 'filterContainer'}
        >
          <h3>PRODUCTO</h3>
          <div className="category">
            {data ? (
              data.map((category) => {
                return (
                  <div key={category.id}>
                    <input
                      id={category.id}
                      type="checkbox"
                      onChange={handleCategory}
                      value={category.id}
                    />
                    <label htmlFor={category.id}>
                      {category.attributes.title.toUpperCase()}
                    </label>
                  </div>
                );
              })
            ) : (
              <LazyListOfProducts />
            )}
          </div>
          <hr />
          <h3>RANGO DE PRECIO</h3>
          <div className="priceRange">
            <span>$0</span>
            <input
              type="range"
              min={0}
              max={150000}
              onChange={changeMaxPrice}
            />
            <span>${maxPrice}</span>
          </div>
          <hr />
          <h3>ORDENAR POR</h3>
          <ul className="orderBy">
            <li onClick={handleSort}>MÁS NUEVO</li>
            <li>MAYOR PRECIO</li>
            <li>OFERTAS</li>
            <li>MARCA A-Z</li>
          </ul>
        </section>
      </section>
      <section className="right">
        <section className="productsSection">
          <ListOfProducts
            maxPrice={maxPrice}
            sort={sort}
            selectedCategory={selectedCategory}
          />
        </section>
      </section>
    </section>
  );
};

export default Products;
