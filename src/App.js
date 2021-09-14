import React from 'react';
import SignUP from './components/SignUP';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/signup" component={SignUP}></Route>
                <Route path="/forgot-password" component={ForgotPassword}></Route>
                <Redirect from="/" to="/signup" />
            </Switch>
        </div>
    )
}

export default App;
