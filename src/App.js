import './App.css';
import { Route, Routes, Link,Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp'
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { auth , createUserProfileDocument} from './firebase/firebase.utils'
import React, { Component } from 'react'
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });
    }

    this.setState({ currentUser: userAuth });
  });}
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
