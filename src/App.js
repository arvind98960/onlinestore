import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage.component';

function App() {
  

  return (
    <div >
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
    </div>
  );
}
export default App;
