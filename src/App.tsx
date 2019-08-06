import * as React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {HOME, SETTINGS} from './constants/routes';
import DashboardPage from "./containers/Dashboard/DashboardPage";
import SettingsPage from './containers/Settings/SettingsPage'
import Layout from './components/layout/layout'
import Websocket from './websocket'
import {receiveMessage} from './store/action'
import Notification from './common/components/Notification/Notification'

class App extends React.Component<any>{

    private notificationSystemRef: null|Notification = null

    public constructor(props: any){
        super(props);
    }

    public componentDidMount(){
        Websocket.onmessage = (message: any) => this.props.receiveMessage(message, this.notificationSystemRef);
    }

    public render(){
        return (
            <BrowserRouter>
                <Layout>
                    <Notification ref={ref => this.notificationSystemRef=ref}/>
                    <Route path={HOME} exact={true} component={DashboardPage}/>
                    <Route path={SETTINGS} exact={true} component={SettingsPage}/>
                </Layout>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        devices: state.device.devices,
        deviceTypes: state.device.deviceTypes
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        receiveMessage: (message: any, notificationHandler: any) => dispatch(receiveMessage(message, notificationHandler)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);