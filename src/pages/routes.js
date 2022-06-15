import { SearchBar } from './components/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './cart/CartIndex';
import Home from './home/Home';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <SearchBar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />

    </Router>
  );

}