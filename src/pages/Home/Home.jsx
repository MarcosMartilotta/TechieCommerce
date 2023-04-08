import './home.scss';
import Slider from './Sections/Slider/Slider';
import Sales from './Sections/Sales/Sales';
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(config.REACT_APP_API_URL + 'categories', {
          headers: {
            Authorization: 'bearer ' + config.REACT_APP_API_TOKEN,
          },
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="home">
      <Slider />
      <Sales />
    </section>
  );
};

export default Home;
