import './home.scss'
import Slider from './Sections/Slider/Slider'
import Sales from './Sections/Sales/Sales'

const Home = () => {
  return (
    <section className="home">
      <Slider />
      <Sales />
    </section>
  )
}

export default Home
