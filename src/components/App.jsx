import "../assets/css/App.css";
import Navbar from "./Navbar";
import { Routes,Route} from 'react-router-dom'
import AboutUs from "./AboutUs";
import Home from "./Home";
import ContactMe from "./ContactMe";
import Catalogo from "./Catalogo";
import QueHacemos from "./QueHacemos";
function App() {
  return (
    <>
    <Navbar/>
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path='queHacemos' element={<QueHacemos/>}/>
        <Route path="/products" element={<Catalogo/>}/>
        <Route path="/contactMe" element={<ContactMe/>}/>
      </Routes>
    </>
  );
}

export default App;
