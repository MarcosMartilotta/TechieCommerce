import './lazyListOfProducts.scss';
import LazyLoadingCard from '../../../../components/ProductCard/LazyLoadingCard/LazyLoadingCard';

const LazyListOfProducts = () => {
  return (
    <div className="lazyListOfProducts">
      <LazyLoadingCard />
      <LazyLoadingCard />
      <LazyLoadingCard />
      <LazyLoadingCard />
      <LazyLoadingCard />
      <LazyLoadingCard />
      <LazyLoadingCard />
      <LazyLoadingCard />
      <LazyLoadingCard />
    </div>
  );
};

export default LazyListOfProducts;
