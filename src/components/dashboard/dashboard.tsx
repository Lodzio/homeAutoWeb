import * as React from 'react';
import DevicesList from './devicesList/devicesList'

const dashboard = (props: IDashboardProps) => {
    return(
    <div>
        <DevicesList 
            onDeviceClickHandler={props.onDeviceClickHandler} 
            devices={props.devices}/>
    </div>
)}

export default dashboard;