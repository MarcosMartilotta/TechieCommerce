import './desktopNav.scss';
import { useNavigate } from 'react-router-dom';
const DesktopNav = () => {
  const navigate = useNavigate();
  return (
    <div className="categories-container">
      <h2 onClick={() => navigate('/products')}>PRODUCTOS</h2>
      <ul>
        <li onClick={() => navigate('/products')}>Teclados</li>
        <li>Mouses</li>
        <li>Auriculares</li>
      </ul>
    </div>
  );
};

export default DesktopNav;
