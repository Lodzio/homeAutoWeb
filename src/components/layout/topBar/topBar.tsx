import * as React from 'react';
import NavigationItem from '../navigationItem/navigationItem'
import {HOME, SETTINGS} from '../../../constants/routes'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'
import './topBar.css'

const topBar = () => { 

    return (
        <AppBar color={'default'} position="static" style={{backgroundColor: '#468902'}} className={'top-bar'}>
            <Toolbar>
                <NavigationItem route={HOME}><DashboardIcon className={"icon"}/></NavigationItem>
                <NavigationItem route={SETTINGS}><SettingsIcon className={"icon"}/></NavigationItem>
            </Toolbar>
        </AppBar>
    )
}

export default topBar;