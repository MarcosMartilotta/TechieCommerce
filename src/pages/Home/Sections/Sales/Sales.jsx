import './sales.scss'
import ProductCard from '../../../../components/ProductCard/ProductCard'
import aurciuclar from '../../../../assets/Auricular1/D_NQ_NP_621706-MLA40186103035_122019-O.webp'
import teclado from '../../../../assets/Teclado1/D_NQ_NP_827091-MLA42404280391_062020-O.webp'
import mouse from '../../../../assets/Mouse1/D_NQ_NP_739243-MLA44836287778_022021-O.webp'
const Sales = () => {
  return (
    <section className="sales">
      <h2>OFERTAS</h2>
      <div className="cardsContainer">
        <ProductCard
          img={aurciuclar}
          alt="Auriculares gamer de vincha con comodas almohadillas"
          price="$15000"
          description="Ariculares HyperX Cloud II KHX-HSCP rojo"
        />
        <ProductCard
          img={teclado}
          alt="Teclado retroiluminado con switches blue"
          price="$20000"
          description="Teclado Motospeed CK61 QWERTY"
        />
        <ProductCard
          img={mouse}
          alt="Mouse con aeroventilas"
          price="$5000"
          description="Mouse gamer VSG Aquila Air negro mate
          "
        />
      </div>
    </section>
  )
}

export default Sales
