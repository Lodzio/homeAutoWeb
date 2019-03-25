import * as React from 'react';
import NavigationItem from '../navigationItem/navigationItem'
import {HOME, SETTINGS} from '../../../constants/routes'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DashboardIcon from '@material-ui/icons/Dashboard'
import Typography from '@material-ui/core/Typography'
import SettingsIcon from '@material-ui/icons/Settings'
import * as moment from 'moment'
import './topBar.css'

class TopBar extends React.Component { 
    public state = {
        time: moment().format('H:mm')
    }

    public componentDidMount(){
        setInterval(() => {
            this.setState({time: moment().format('H:mm')})
        }, 60000)
    }

    public render(){
        return (
            <AppBar color={'default'} position="static" style={{backgroundColor: '#468902'}}>
                <Toolbar className={'top-bar'}>
                    <Typography className={'typography'}>
                        <NavigationItem route={HOME}><DashboardIcon className={"icon"}/></NavigationItem>
                        <NavigationItem route={SETTINGS}><SettingsIcon className={"icon"}/></NavigationItem>
                    </Typography>
                    <div className={'time'}>
                        {this.state.time} 
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default TopBar;