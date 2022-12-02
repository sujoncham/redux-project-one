import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import NoPage from './components/Pages/NoPage';
import ProductOne from './components/Pages/Products/ProductOne';
import ProductThree from './components/Pages/Products/ProductThree';
import ProductTwo from './components/Pages/Products/ProductTwo';
import Services from './components/Pages/Services';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} >
            <Route index element={<ProductOne />} />
            <Route path='productOne' element={<ProductOne />} />
            <Route path="productTwo" element={<ProductTwo />} />
            <Route path="productThree" element={<ProductThree />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
