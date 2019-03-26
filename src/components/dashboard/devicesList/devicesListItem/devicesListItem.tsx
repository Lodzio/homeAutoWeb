import * as React from 'react'
import SwitchIcon from '@material-ui/icons/PowerSettingsNew'
import SensorIcon from '@material-ui/icons/Info'
import ButtonBase from '@material-ui/core/ButtonBase'
import './devicesListItem.css'

const devicesListItem = (props: IDevicesListItem) => {
    const switchClasses = props.device.value? 'icon active': 'icon';
    return(
        <div className={'devices-list-item'}>
            <ButtonBase onClick={props.onClickHandler} style={{width: '100%', height: '100%', }}>
                <div className={'container'}>
                    {props.device.type === 'button' && <SwitchIcon className={switchClasses}/>}
                    {props.device.type === 'sensor' && <SensorIcon className={'icon active'}/>}
                    <div className={'title'}>
                        {props.device.title}
                    </div>
                </div>
            </ButtonBase>
        </div>
    )
}

export default devicesListItem;