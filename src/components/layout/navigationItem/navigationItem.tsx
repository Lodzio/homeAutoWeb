import * as React from 'react';
import {NavLink} from 'react-router-dom'
import './navigationItem.css'

const navigationItem = (props: INavigationItem) => {
    return (
        <div className={'navigation-item'}>
            <NavLink style={{outline: 'none'}} to={props.route} exact={true}>{props.children}</NavLink>
        </div>
    )
}

export default navigationItem;