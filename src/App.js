import './App.css';
import { Route, Routes, Link,Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp'
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
function App() {
  

  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInAndSignUp}></Route>
      </Switch>
    </div>
  );
}
export default App;
