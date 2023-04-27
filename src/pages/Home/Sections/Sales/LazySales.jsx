import LazyLoadingCard from '../../../../components/ProductCard/LazyLoadingCard/LazyLoadingCard';
import './sales.scss';
const LazySales = () => {
  return (
    <section className="sales">
      <h2>OFERTAS</h2>
      <div className="cardsContainer">
        <LazyLoadingCard />
        <LazyLoadingCard />
        <LazyLoadingCard />
        <LazyLoadingCard />
      </div>
    </section>
  );
};

export default LazySales;
