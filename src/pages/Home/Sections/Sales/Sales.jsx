import './sales.scss';
import ProductCard from '../../../../components/ProductCard/ProductCard';

const Sales = ({ type, data, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    console.log('error');
  } else {
    return (
      <section className="sales">
        <div className="cardsContainer">
          {loading ? (
            <p>Loading..</p>
          ) : (
            data.map((product) => {
              <ProductCard product={product} key={product.id} type={'sale'} />;
            })
          )}
        </div>
      </section>
    );
  }
};

export default Sales;
