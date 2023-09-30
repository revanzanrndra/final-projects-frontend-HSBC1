import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Kategori from "./pages/Kategori";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/Notfound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Kategori" element={<Kategori />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
