import './slider.scss'
import Arrows from './Arrows/Arrows'
import { useState } from 'react'

const imgOne =
  'https://images.pexels.com/photos/9072343/pexels-photo-9072343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const imgTwo =
  'https://images.pexels.com/photos/7858761/pexels-photo-7858761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const imgThre =
  'https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const imgFour =
  'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1)
  }

  return (
    <section className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={imgOne}
          alt="Imagen de teclado y manos jugando counter strike"
        />
        <img src={imgTwo} alt="" />
        <img src={imgThre} alt="" />
        <img src={imgFour} alt="" />
      </div>
      <div className="arrows">
        <Arrows nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>
    </section>
  )
}

export default Slider
