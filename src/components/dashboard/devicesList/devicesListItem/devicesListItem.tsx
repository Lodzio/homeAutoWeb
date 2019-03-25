import * as React from 'react'
import './devicesListItem.css'
import SwitchIcon from '@material-ui/icons/PowerSettingsNew'
import SensorIcon from '@material-ui/icons/Info'

const devicesListItem = (props: IDevicesListItem) => {
    return(
        <div className={'devices-list-item'}>
            {props.device.type === 'button' && <SwitchIcon className={'icon'}/>}
            {props.device.type === 'sensor' && <SensorIcon className={'icon'}/>}
            <div className={'title'}>
                {props.device.title}
            </div>
        </div>
    )
}

export default devicesListItem;