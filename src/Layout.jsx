import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './index.scss';
function Layout() {
  console.log(import.meta.env.VITE_API_URL);

  return (
    <div className="Layout">
      <NavBar />
      <Outlet />
      <Footer className="footer" />
    </div>
  );
}

export default Layout;
