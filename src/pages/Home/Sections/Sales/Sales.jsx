import './sales.scss';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import useFetch from '../../../../hooks/useFetch';

const Sales = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type]=${type}`,
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="sales">
      <h2>OFERTAS</h2>
      <div className="cardsContainer">
        {data ? (
          data.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Sales;
