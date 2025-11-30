import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { ContactPage } from './Pages/ContactPage';
import { CategoryPage } from './Pages/CategoryPage';
import { DetailPage } from './Pages/DetailPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/category/:name' element={<CategoryPage />} />
        <Route path='/recipe/:id' element={<DetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  )
}
