import './desktopNav.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const DesktopNav = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`/categories`);

  return (
    <div className="categories-container">
      <h2 onClick={() => navigate('/products/empty')}>PRODUCTOS</h2>
      <ul>
        {data ? (
          data.map((category) => {
            return (
              <li
                key={category.id}
                value={category.id}
                onClick={() => navigate(`/products/${category.id}`)}
              >
                {category.attributes.title.toUpperCase()}
              </li>
            );
          })
        ) : (
          <></>
        )}
        {/*         <li onClick={() => navigate('/products')}>Teclados</li>
        <li>Mouses</li>
        <li>Auriculares</li> */}
      </ul>
    </div>
  );
};

export default DesktopNav;
