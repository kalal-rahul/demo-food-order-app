import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartShown, setIsCartShown] = useState(false); 

  const showCartHadler = () =>{
    setIsCartShown(true);
  }

  const hideCartHandler = () =>{
    setIsCartShown(false);
  }


  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHadler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
