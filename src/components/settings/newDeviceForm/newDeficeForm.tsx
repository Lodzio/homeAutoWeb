import * as React from 'react';
import Button from '@material-ui/core/Button'
import Picker from '../../../common/components/Picker/Picker'
import TextField from '../../../common/components/TextField/TextField'
import DeviesTable from '../devicesTable/devicesTable'
import './newDeviceForm.css'

const newDeviceForm = (props: INewDeviceForm) => {return(
    <div className={"new-device-form"}>
        <DeviesTable 
            devices={props.detectedDevices} 
            onDeviceClick={props.onDetectedDeviceClick}/>
        <Picker
            label={"type"} 
            onChange={props.onTypeChangeHandles} 
            items={props.deviceTypes} 
            value={props.newDeviceType}/>
        <TextField
            label={"title"} 
            value={props.title}
            onChange={props.onTitleChange}
            className={'text-field'}/>
        <Button disabled={!props.isAddNewDeviceButtonActive} className={"button"} onClick={props.onAddNewDeviceButtonHandler}>add new device</Button>
    </div>
)}

export default newDeviceForm;