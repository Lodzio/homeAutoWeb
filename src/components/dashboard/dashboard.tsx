import * as React from 'react';
import DevicesList from './devicesList/devicesList'
import Modal from '../../common/components/Modal/Modal'
import DeviceDetails from './deviceDetails/deviceDetails'

const dashboard = (props: IDashboardProps) => {
    return(
    <div>
        <DevicesList onDetailsClickHandler={props.onDeviceDetailsClickHandler} onDeviceClickHandler={props.onDeviceClickHandler} devices={props.devices}/>
        <Modal 
        open={props.isDeviceDetailsOpen}
        onClose={props.onDetailsCloseHandler}>
            <DeviceDetails device={props.devices[0]}/>
        </Modal>
    </div>
)}

export default dashboard;