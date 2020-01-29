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
import Footer from "./components/Footer";
// import Clothing from './components/Clothing'
// import Logout from './components/Logout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
            {/* <ProductsList/> */}
                <Route exact path="/" component={App} />
                <Route exact path="/home" component ={Home}/>
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/products" component={ProductsList} />
                <Route path="/cart" component={Cart} />
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
