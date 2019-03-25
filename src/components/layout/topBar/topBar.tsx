import * as React from 'react';
import {NavLink} from 'react-router-dom'
import {HOME, SETTINGS} from '../../../constants/routes'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const topBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink to={HOME} exact={true}>Home</NavLink>
                <NavLink to={SETTINGS} exact={true}>Config</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default topBar;