import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { React, useState, useEffect } from 'react'
import About from './pages/About';
import Shop from './pages/Shop';
import CustomOrder from './pages/CustomOrder';
import CommissionPage from './pages/Commissions'
import Cart from './pages/Cart';
import Navbar from './components/NavBar';
import Login from './pages/Login';
import Service from './pages/Services';
import PageNotFound from './components/PageNotFound';
import { CartProvider } from './utils/CartContext';
import ProductManagement from './pages/productManagement';
import API from './utils/API';
import './App.css';
function App() {
  let retrieved = JSON.parse(localStorage.getItem("cart"))
  let [cart, setCart] = useState({
    cart: retrieved,
    updateCart:(arg)=>{
      setCart({
        ...cart,
        cart: arg
      })
      localStorage.setItem("cart", JSON.stringify(cart.cart))
    }
  })
  useEffect(()=>{
    retrieved = JSON.parse(localStorage.getItem("cart"))
    console.log(JSON.parse(localStorage.getItem("cart")))
    if(retrieved !== null){
      setCart({
        ...cart,
        cart: retrieved
      })
    }
    else{
      setCart({
        ...cart,
        cart: []
      })
      localStorage.setItem("cart", JSON.stringify(cart.cart))
    }
  },[])
  //TODO figure out how to change this state 
  //depending on the whether or not the user is currently logged in
  // const PrivateRoute =  ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={(props) => (
  //     auth.authed === true
  //       ? <Component {...props} />
  //       : <Redirect to='/login' />
  //   )} />
  // )
  return (
    <HashRouter>
      <Navbar />
      <div id="generalContainer">
      <CartProvider>
        <Switch>
        <Route exact path="/" component={About} />
        <Route path="/Banners" render={() => {
          return <Shop type="banners" cart={cart.cart} updateCart={cart.updateCart}/>
        }} />
        <Route path="/Stoles" render={() => {
          return <Shop type="stoles" cart={cart.cart} updateCart={cart.updateCart} />
        }} />
        {/* <PrivateRoute path='/admin' component={ProductManagement}/> */}
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/custom-order" component={CustomOrder} />
        <Route path="/commissions" component={CommissionPage} />
        <Route path="/workshops" render={() => {
          return <Service name="Hands-On Workshops" />
        }} />
        <Route path="/events" render={() => {
          return <Service name="Events" />
        }} />
        <Route path="/consultations" render={() => {
          return <Service name="Consultations" />
        }} />
        <Route path="/cart" render={()=>{
          return <Cart cart={cart.cart} updateCart={cart.updateCart}/>
        }} />
        <Route path="*" component={PageNotFound}/>
        </Switch>
      </CartProvider>
      </div>
    </HashRouter>
  );
}

export default App;




