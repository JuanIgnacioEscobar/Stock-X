import ItemNavbar from './Components/Navbar/ItemNavbar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { CartProvider } from './Components/CartContext/cartContext';
import Cart from './Components/Cart/Cart'
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ItemNavbar />
        <Switch>
          <Route exact path='/Item/:id'>
            <ItemDetailContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route path='/'>
            <OnLoadPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

function OnLoadPage(){
  const history = useHistory();
  history.push('/home');
  return(
    <>
    </>
  )
}