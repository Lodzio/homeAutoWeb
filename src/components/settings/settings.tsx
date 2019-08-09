import * as React from 'react';
import Button from '@material-ui/core/Button'
import DeviesTable from './devicesTable/devicesTable'
import DeviceDetails from './deviceDetails/deviceDetails'
import Modal from '../../common/components/Modal/Modal'
import './settings.css'

const settings = (props: ISettings) => {
    return(
    <div className={"setting"}>
        <Modal 
            open={props.isDeviceDetailsOpen}
            onClose={props.onDetailsCloseHandler}>
            <DeviceDetails 
                device={props.selectedDevice}
                onSubmitHandler={props.onDeviceEditSubmitHandler}
                onCancelHandler={props.onDeviceEditCancelHandler}
                onDeleteHandler={props.onDeviceDeleteHandler}
                />
        </Modal>
        <DeviesTable 
            devices={props.devices} 
            onDeviceClick={props.onDeviceClick}/>
        <Button className={'button'} onClick={props.onAddNewDeviceFormOpen}>create new device</Button>
    </div>
)}

export default settings;