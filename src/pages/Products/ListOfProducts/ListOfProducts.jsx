import useFetch from '../../../hooks/useFetch';
import ProductCard from '../../../components/ProductCard/ProductCard';

const ListOfProducts = ({ maxPrice, sort, selectedCategory }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&`);
  console.log(selectedCategory);
  return (
    <div className="productsSection">
      {data ? (
        data.map((product) => {
          if (selectedCategory.length === 0) {
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListOfProducts;
