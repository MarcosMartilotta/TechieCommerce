import './arrows.scss'

const Arrows = ({ nextSlide, prevSlide }) => {
  return (
    <>
      <div className="arrow-left" onClick={prevSlide}>
        {'<'}
      </div>
      <div className="arrow-right" onClick={nextSlide}>
        {'>'}
      </div>
    </>
  )
}

export default Arrows
