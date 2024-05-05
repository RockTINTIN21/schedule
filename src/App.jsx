import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/about/About.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {

  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
          </Routes>
          <Footer/>
      </BrowserRouter>

  )
}

export default App
