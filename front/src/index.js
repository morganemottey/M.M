import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login'
import Products from './components/Products'
import Cart from './components/cart'
import About from './components/About'
import Home from './components/Home';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import ProductsList from "./components/productsList";
import Test from './components/Test'
import Footer from "./components/Footer";
import thunk from 'redux-thunk';
import Payment from './components/Payment'
// import Clothing from './components/Clothing'
// import Logout from './components/Logout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);

const PrivateRoute = (props) => {
    if (localStorage.getItem("token") )
        return <Route {...props} />
    else
        return <Redirect to='/login'/>
}
const PublicRoute = (props) => {
    
    if (!localStorage.getItem("token") )
        return <Route {...props} />
    else
        return <Redirect to='/'/>
        
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
            {/* <ProductsList/> */}
                <PrivateRoute exact path="/" component={App} />
                <PrivateRoute exact path="/home" component ={Home}/>
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="/about" component={About} />
                <Route path="/test" component={Test} />
                <Route path="/payment" component={Payment}/>
                <PrivateRoute path="/products" component={ProductsList} />
                <PrivateRoute path="/cart" component={Cart} />
                <Footer/>


                {/* <Route exact path="/login" component={Login} />
                {/* <PrivateRoute path="/logout" component={Logout} /> */}
                {/* <Route path="/logout" component={Logout} /> */} */}
               
            </Switch>
        </Router>
        </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
