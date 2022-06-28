import { SearchBar } from 'components/Header/SearchBar/SearchBar';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './cart/CartIndex';
import Home from './home/Home';
import { Details } from './details/Details';
import { GlobalStyle } from 'GlobalStyle';
import { StorageProvider } from 'state/contexts/StorageContext';
import { PostProvider } from 'state/contexts/PostsContext';
import { CartProvider } from 'state/contexts/CartContext';

export default function AppRouter() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <StorageProvider>
        <CartProvider>
          <Routes>
            <Route
              path={'/' | 'home'}
              element={
                <PostProvider>
                  <Home />
                </PostProvider>
              }
            />

            <Route path='/cart' element={<Cart />} />

            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </CartProvider>
      </StorageProvider>

      <Footer />
    </Router>
  );
}
