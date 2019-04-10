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
            <DeviceDetails 
                device={props.selectedDevice} 
                selectedTypeLabel={props.selectedTypeLabel}
                onTitleChange={props.onDeviceTitleChangeHandler}
                onSubmitButtonClick={props.onSubmitDeviceEditButtonClick}
                onCancelButtonClick={props.onCancelDeviceEditButtonClick}
                onPortChange={props.onDevicePortChangeHandler}
                />
        </Modal>
    </div>
)}

export default dashboard;