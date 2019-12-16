import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/Home';
import RegisterPage from './components/auth/Register';
import Login from './components/auth/Login';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div className="container">
                <Route exact path="/">
                    <HomePage />
                 </Route>

                 <Route exact path="/login">
                    <Login />
                 </Route>
                 <Route exact path="/register">
                    <RegisterPage />
                 </Route>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))