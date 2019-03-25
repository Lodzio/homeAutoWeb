import * as React from 'react';
import {NavLink} from 'react-router-dom'

const navigationItem = (props: INavigationItem) => {
    return (
        <div>
            <NavLink to={props.route} exact={true}>{props.children}</NavLink>
        </div>
    )
}

export default navigationItem;