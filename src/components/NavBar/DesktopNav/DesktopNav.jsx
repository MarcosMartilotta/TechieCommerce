import './desktopNav.scss';
import { useNavigate } from 'react-router-dom';
const DesktopNav = () => {
  const navigate = useNavigate();
  return (
    <div className="categories-container">
      <h2 onClick={() => navigate('/products')}>Productos</h2>
      <span>Teclados</span>
      <span>Mouses</span>
      <span>Auriculares</span>
    </div>
  );
};

export default DesktopNav;
