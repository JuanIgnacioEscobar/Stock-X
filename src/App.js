import ItemNavbar from './Components/Navbar/ItemNavbar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import './App.css';

export default function App() {
  return (
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