import ItemNavbar from './Components/Navbar/ItemNavbar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { CartProvider } from './Components/CartContext/cartContext'
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ItemNavbar />
        <Switch>
          <Route path='/Item/:id'>
            <ItemDetailContainer />
          </Route>
          <Route path="/">
            <OnLoadPage />
            <ItemListContainer />
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