import './product.scss';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import config from '../../../config';
const Product = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`products/${id}?populate=*`);
  const [selectedImage, setSelectedImage] = useState('img');

  return (
    <section className="product">
      <section className="left">
        <div className="allImagesContainer">
          <figure onClick={() => setSelectedImage('img')}>
            <img
              src={
                config.REACT_APP_UPLOAD_URL +
                data?.attributes.img?.data.attributes.url
              }
              alt=""
            />
          </figure>
          <figure onClick={() => setSelectedImage('img2')}>
            <img
              src={
                config.REACT_APP_UPLOAD_URL +
                data?.attributes.img2?.data.attributes.url
              }
              alt=""
            />
          </figure>
          <figure onClick={() => setSelectedImage('img3')}>
            <img
              src={
                config.REACT_APP_UPLOAD_URL +
                data?.attributes.img3?.data.attributes.url
              }
              alt=""
            />
          </figure>
          {data?.attributes.img4.data?.attributes?.url && (
            <figure onClick={() => setSelectedImage('img4')}>
              <img
                src={
                  config.REACT_APP_UPLOAD_URL +
                  data?.attributes.img4?.data.attributes.url
                }
                alt=""
              />
            </figure>
          )}
        </div>
        {data ? (
          <div className="selectedImage">
            <figure>
              <img
                src={
                  config.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImage].data.attributes.url
                }
                alt=""
              />
            </figure>
          </div>
        ) : (
          <p>Loading...</p>
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
          <p>Loading...</p>
        )}

        <div className="addOrLess">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
        <button className="addToChart">Agregar al carrito</button>
        <button className="goToPay">Ir a pagar</button>
      </section>
    </section>
  );
};

export default Product;
