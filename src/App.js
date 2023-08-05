import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [isCartShown, setIsCartShown] = useState(false); 

  const showCartHadler = () =>{
    setIsCartShown(true);
  }

  const hideCartHandler = () =>{
    setIsCartShown(false);
  }


  return (
    <Fragment>
      {isCartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHadler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
