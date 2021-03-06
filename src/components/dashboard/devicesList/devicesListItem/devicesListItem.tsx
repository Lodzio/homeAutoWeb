import * as React from 'react'
import SwitchIcon from '@material-ui/icons/PowerSettingsNew'
import SensorIcon from '@material-ui/icons/Info'
import ButtonBase from '@material-ui/core/ButtonBase'
import './devicesListItem.css'

const devicesListItem = (props: IDevicesListItem) => {
    const switchClasses = props.device.value === 1? 'icon active': 'icon';
    return(
        <div className={'devices-list-item'}>
            {props.device.type === 'button' && 
                <ButtonBase onClick={props.onClickHandler} style={{marginRight: 10}}>
                    <SwitchIcon className={switchClasses}/>
                </ButtonBase>}
            {props.device.type === 'sensor' && <SensorIcon style={{marginRight: 10}} className={'icon active'}/>}
            <div className={'title'}>
                {props.device.title}
            </div>
            <div>{props.device.type === 'sensor'&&props.device.value}</div>
        </div>
    )
}

export default devicesListItem;