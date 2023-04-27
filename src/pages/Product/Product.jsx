import './product.scss';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`products/${id}?populate=*`);
  const [selectedImage, setSelectedImage] = useState('img');
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="product">
      <section className="left">
        {data ? (
          <div className="allImagesContainer">
            <figure onClick={() => setSelectedImage('img')}>
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  data?.attributes.img?.data.attributes.url
                }
                alt=""
              />
            </figure>
            <figure onClick={() => setSelectedImage('img2')}>
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  data?.attributes.img2?.data.attributes.url
                }
                alt=""
              />
            </figure>
            <figure onClick={() => setSelectedImage('img3')}>
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  data?.attributes.img3?.data.attributes.url
                }
                alt=""
                onLoad={() => <p>Loading</p>}
              />
            </figure>
            {data?.attributes.img4.data?.attributes?.url && (
              <figure onClick={() => setSelectedImage('img4')}>
                <img
                  src={
                    import.meta.env.VITE_UPLOAD_URL +
                    data?.attributes.img4?.data.attributes.url
                  }
                  alt=""
                />
              </figure>
            )}
          </div>
        ) : (
          <></>
        )}

        {data ? (
          <div className="selectedImage">
            <figure>
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  data?.attributes[selectedImage].data.attributes.url
                }
                alt=""
              />
            </figure>
          </div>
        ) : (
          <div className="selectedImageLazy"></div>
        )}
      </section>
      <section className="right">
        {data ? (
          <>
            <h2>{data?.attributes.title}</h2>
            <p className="price">${data?.attributes.price}</p>
            <p className="description">{data?.attributes.description}</p>
          </>
        ) : (
          <div className="selectedImageLazy"></div>
        )}

        <div className="addOrLess">
          <button
            onClick={() =>
              setQuantity((prev) => (prev !== 1 ? prev - 1 : prev))
            }
          >
            -
          </button>
          <div>{quantity}</div>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="addToChart"
          onClick={() =>
            dispatch(
              addToCart({
                id,
                title: data?.attributes.title,
                img:
                  import.meta.env.VITE_UPLOAD_URL +
                  data?.attributes.img?.data.attributes.url,
                price: data?.attributes.price,
                quantity: quantity,
              }),
            )
          }
        >
          Agregar al carrito
        </button>
        <button className="goToPay">Ir a pagar</button>
      </section>
    </section>
  );
};

export default Product;
