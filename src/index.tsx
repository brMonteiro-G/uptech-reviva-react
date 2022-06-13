import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Cart } from './pages/cart';
import { Footer } from './pages/components/Footer/Footer';
import { Header } from './pages/components/Header/Header';
import Home from './pages/home/Home';
// import Home from './pages/home/Home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <RecoilRoot>
       <Home />
    {/* <Cart/> */}
    </RecoilRoot>
   
    <Footer />

  </React.StrictMode>
);
