import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import NotFound from './pages/NotFound';
import User from './pages/User';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/user/add'} element={<AddUser />} />
            <Route path={'/user/edit/:id'} element={<EditUser />} />
            <Route path={'/user/:id'} element={<User />} />
            <Route path={'*'} element={<NotFound />} />
        </Routes>
        <Footer />

      </div> 
    </Router>
  );
}

export default App;
