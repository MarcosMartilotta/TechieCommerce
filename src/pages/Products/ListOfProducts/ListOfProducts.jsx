import useFetch from '../../../hooks/useFetch';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { lazy, Suspense } from 'react';
import LazyListOfProducts from './LazyListOfProducts/LazyListOfProducts';

const ListOfProducts = ({ maxPrice, sort, selectedCategory }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&sort=price:${sort}`,
  );

  const lazyCards = () => <LazyListOfProducts />;
  return (
    <Suspense fallback={lazyCards()}>
      <div className="productsSection">
        {data ? (
          data.map((product) => {
            if (
              selectedCategory.length === 0 &&
              product.attributes.price <= maxPrice
            ) {
              return <ProductCard product={product} key={product.id} />;
            } else if (
              selectedCategory.some((value) =>
                value.includes(product.attributes.categories.data[0].id),
              )
            ) {
              return <ProductCard product={product} key={product.id} />;
            }
          })
        ) : (
          <LazyListOfProducts />
        )}
      </div>
    </Suspense>
  );
};

export default ListOfProducts;
