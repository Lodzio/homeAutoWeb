import * as React from 'react';
import TopBar from './topBar/topBar'

const layout = (props: ILayout) => {
    return (
        <div>
            <TopBar/>
            {props.children}
        </div>
    )
}

export default layout;