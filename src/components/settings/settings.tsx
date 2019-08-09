import * as React from 'react';
// import NewDeviceForm from './newDeviceForm/newDeficeForm'
// import Button from '@material-ui/core/Button'
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
        {/* {props.isAddNewDeviceFormOpen?
        <NewDeviceForm 
        onTitleChange={props.onTitleChange}
        deviceTypes={props.deviceTypes}
        isAddNewDeviceButtonActive={props.isAddNewDeviceButtonActive}
        onAddNewDeviceButtonHandler={props.onAddNewDeviceButtonHandler}
        newDeviceType={props.newDeviceType}
        onTypeChangeHandles={props.onTypeChangeHandles}/>:
        <Button className={'button'} onClick={props.onAddNewDeviceFormOpenButtonHandler}>create new device</Button>} */}
    </div>
)}

export default settings;