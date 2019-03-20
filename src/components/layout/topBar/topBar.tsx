import * as React from 'react';
import {NavLink} from 'react-router-dom'
import {HOME, SETTINGS} from '../../../constants/routes'

const topBar = () => {
    return (
        <div>
            <NavLink to={HOME} exact={true}>Home</NavLink>
            <NavLink to={SETTINGS} exact={true}>Config</NavLink>
        </div>
    )
}

export default topBar;