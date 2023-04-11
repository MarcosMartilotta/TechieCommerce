import './home.scss';
import Slider from './Sections/Slider/Slider';
import Sales from './Sections/Sales/Sales';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch(`/products?populate=*`);
  return (
    <section className="home">
      <Slider />
      <Sales type={'sale'} data={data} loading={loading} error={error} />
    </section>
  );
};

export default Home;
