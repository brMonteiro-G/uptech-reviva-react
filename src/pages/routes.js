import { SearchBar } from './components/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './cart/CartIndex';
import Home from './home/Home';
import { Details } from './details/Details';
import { GlobalStyle } from 'GlobalStyle';


export default function AppRouter() {
  return (
    <Router>
      <GlobalStyle />

      <Header />
      <SearchBar />
      <Routes>

        <Route path={'/' | 'home'} element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/details/:id' element={<Details />} />

      </Routes>
      <Footer />

    </Router>
  );

}