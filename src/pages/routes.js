import { SearchBar } from './components/Header/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './cart/CartIndex';
import Home from './home/Home';
import { Details } from './details/Details';
import { GlobalStyle } from 'GlobalStyle';
import { StorageContext } from 'common/StorageContext';
import { CartContext } from 'common/CartContext';
import Inventory from 'inventory';

export default function AppRouter() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <StorageContext.Provider
        value={Inventory.available_products_in_inventory}
      >
        <Routes>
          <Route path={'/' | 'home'} element={<Home />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </StorageContext.Provider>

      <Footer />
    </Router>
  );
}
