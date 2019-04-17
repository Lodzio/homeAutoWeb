import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {HOME, SETTINGS} from './constants/routes';
import DashboardPage from "./containers/Dashboard/DashboardPage";
import SettingsPage from './containers/Settings/SettingsPage'
import Layout from './components/layout/layout'
import {fetchDevices} from './store/action'

class App extends React.Component {

    connection: any;

    public constructor(props: any){
        super(props);
        this.connection = new WebSocket('ws:192.168.1.112:1337');

        this.connection.onopen = () => {
        console.log("Connection opened!");
        };
    }

    public componentDidMount(){
        this.connection.onmessage = (message: any) => {
            const data = JSON.parse(message.data);
            fetchDevices(data);
        }
    }

    public render(){
        return (
            <BrowserRouter>
                <Layout>
                    <Route path={HOME} exact={true} component={DashboardPage}/>
                    <Route path={SETTINGS} exact={true} component={SettingsPage}/>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;