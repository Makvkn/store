import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Shop from "./components/Shop/Shop";
import ModalShopping from "./components/UI/ModalShopping";
import ModalCard from "./components/UI/ModalCard";

function App() {

    //my Modal Cart
    const [cartIsShown, setCartIsShown] = useState<boolean>(false)
    //my Modal Basket
    const [basketIsShown, setBasketIsShown] = useState<boolean>(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    const showBasketHandler = () => {
        setBasketIsShown(true)
    }

    const hideBasketHandler = () => {
        setBasketIsShown(false)
    }

  return (
    <div className="App">
        {cartIsShown && <ModalCard />}
        {basketIsShown && <ModalShopping />}
        <Header />
        <Shop />
      {/*<header className="App-header">*/}
      {/*</header>*/}


    </div>
  );
}

export default App;
