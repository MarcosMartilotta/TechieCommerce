import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
function Layout() {
  return (
    <Provider store={store}>
      <PersistGate loading={'loading'} persistor={persistor}>
        <div className="Layout">
          <NavBar />
          <Outlet />
          <Footer className="footer" />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default Layout;
