import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login'
import Clothing from './components/Clothing'
import Cart from './components/Cart'
// import Clothing from './components/Clothing'
// import Logout from './components/Logout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(

        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/clothing" component={Clothing} />
                <Route path="/cart" component={Cart} />

                {/* <Route exact path="/login" component={Login} />
                {/* <PrivateRoute path="/logout" component={Logout} /> */}
                {/* <Route path="/logout" component={Logout} /> */} */}
               
            </Switch>
        </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
