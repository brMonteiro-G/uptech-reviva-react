import { SearchBar } from 'components/Header/SearchBar/SearchBar';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './cart/CartIndex';
import Home from './home/Home';
import { Details } from './details/Details';
import { GlobalStyle } from 'GlobalStyle';
import { StorageProvider } from 'contexts/StorageContext';
import { PostProvider } from 'contexts/PostsContext';

export default function AppRouter() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <StorageProvider>
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
      </StorageProvider>

      <Footer />
    </Router>
  );
}
