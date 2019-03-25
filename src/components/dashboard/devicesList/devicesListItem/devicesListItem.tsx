import * as React from 'react'
import ListItem from '@material-ui/core/ListItem'

const devicesListItem = (props: IDevicesListItem) => {
    return(
        <ListItem>
            {props.device.title}
            {props.device.type}
        </ListItem>
    )
}

export default devicesListItem;