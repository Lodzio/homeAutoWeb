import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {HOME, SETTINGS} from './constants/routes';
import DashboardPage from "./containers/Dashboard/DashboardPage";
import SettingsPage from './containers/Settings/SettingsPage'
import Layout from './components/layout/layout'

const app = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route path={HOME} exact={true} component={DashboardPage}/>
                <Route path={SETTINGS} exact={true} component={SettingsPage}/>
            </Layout>
        </BrowserRouter>
    );
}

export default app;
