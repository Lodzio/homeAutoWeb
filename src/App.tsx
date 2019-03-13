import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {HOME} from './constants/routes';
import HomePage from "./containers/HomePage/HomePage";

const app = () => {
    return (
        <BrowserRouter>
                <Route path={HOME} exact={true} component={HomePage}/>
        </BrowserRouter>
    );
}

export default app;
