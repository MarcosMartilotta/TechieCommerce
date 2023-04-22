import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import './index.scss';
function Layout() {
  return (
    <Provider store={store}>
      <div className="Layout">
        <NavBar />
        <Outlet />
        <Footer className="footer" />
      </div>
    </Provider>
  );
}

export default Layout;
