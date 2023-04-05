import './slider.scss'

const imgOne =
  'https://images.pexels.com/photos/9072343/pexels-photo-9072343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const imgTwo =
  'https://images.pexels.com/photos/7858761/pexels-photo-7858761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const imgThre =
  'https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const imgFour =
  'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

const Slider = () => {
  return (
    <div className="slider-container">
      <figure>
        <img
          src={imgOne}
          alt="Imagen de teclado y manos jugando counter strike"
        />
      </figure>
      <figure>
        <img src={imgTwo} alt="" />
      </figure>
      <figure>
        <img src={imgThre} alt="" />
      </figure>
      <figure>
        <img src={imgFour} alt="" />
      </figure>
    </div>
  )
}

export default Slider
