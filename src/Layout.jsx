import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  return (
    <div className="Layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
