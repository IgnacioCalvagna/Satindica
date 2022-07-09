import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/home/Home";
import ContactMe from "./components/Contact/ContactMe";
import Catalogo from "./components/catalogo/Catalogo";
import QueHacemos from "./components/QueHacemos";
import Footer from "./components/Footer/Footer";
import AddProduct from "./components/AddProduct";
import Pedido from "./components/Pedido";
import Login from "./components/Login";
import PorqueNosotros from "./components/PorqueNosotros";
import Register from "./components/Register";
import ProductDetail from "./components/catalogo/ProductDetail";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="queHacemos" element={<QueHacemos />} />

        <Route path="/products" element={<Catalogo />} />
        <Route path="/products/:linea" element={<Catalogo />} />

        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/pedido" element={<Pedido />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/whyUs" element={<PorqueNosotros />} />

        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <div className="footi">
        <Footer />
      </div>
    </div>
  );
}

export default App;
