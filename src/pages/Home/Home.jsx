import './home.scss';
import Slider from './Sections/Slider/Slider';
import Sales from './Sections/Sales/Sales';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  return (
    <section className="home">
      <Slider />
      <Sales type={'sale'} />
    </section>
  );
};

export default Home;
