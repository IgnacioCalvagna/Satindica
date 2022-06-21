import "../assets/css/App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";
import ContactMe from "./ContactMe";
import Catalogo from "./Catalogo";
import QueHacemos from "./QueHacemos";
import Footer from "./Footer";
import AddProduct from "./AddProduct";
import Pedido from './Pedido';
import PorqueNosotros from './PorqueNosotros';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="queHacemos" element={<QueHacemos />} />
        
        <Route path="/products" element={<Catalogo />} />
        <Route path='/products/add' element={<AddProduct/>}/>
        <Route path='/products/pedido' element={<Pedido/>}/>
        
        
        <Route path='/whyUs' element={<PorqueNosotros/>}/>

        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>

      <div className="footi">
        <Footer />
      </div>
    </div>
  );
}

export default App;
