import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage /> }/>
        </Routes>

        <Sidebar />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
