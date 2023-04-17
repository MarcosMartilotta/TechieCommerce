import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import './products.scss';
import ListOfProducts from './ListOfProducts/ListOfProducts';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  //const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [sort, setSort] = useState(null);
  const [active, setActive] = useState(false);
  const { data, loading, error } = useFetch(`/categories`);
  if (loading) {
    return <p>Loading...</p>;
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
              <p>Loading...</p>
            )}
          </div>
          <h3>RANGO DE PRECIO</h3>
          <form action="">
            <input type="text" />
          </form>
          <hr />
          <h3>ORDENAR POR</h3>
          <ul className="orderBy">
            <li>Más nuevo</li>
            <li>Mayor precio</li>
            <li>Ofertas</li>
            <li>Marca A-Z</li>
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
