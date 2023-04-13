import useFetch from '../../../hooks/useFetch';
import ProductCard from '../../../components/ProductCard/ProductCard';

const ListOfProducts = ({ maxPrice, sort, selectedCategory }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filter[category.slug_eq]=${selectedCategory}`,
  );
  console.log(data);
  return (
    <div className="productsSection">
      {data ? (
        data.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListOfProducts;
