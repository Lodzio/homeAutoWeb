import * as React from 'react';
import Button from '@material-ui/core/Button'
import Picker from '../../../common/components/Picker/Picker'
import TextField from '../../../common/components/TextField/TextField'
import './newDeviceForm.css'

const newDeviceForm = (props: INewDeviceForm) => {return(
    <div className={"new-device-form"}>
        <Picker 
            label={"type"} 
            onChange={props.onTypeChangeHandles} 
            items={props.deviceTypes} 
            value={props.newDeviceType}/>
        <TextField 
            label={"title"} 
            onChange={props.onTitleChange}
            className={'text-field'}/>
        <Button disabled={!props.isAddNewDeviceButtonActive} className={"button"} onClick={props.onAddNewDeviceButtonHandler}>add new device</Button>
    </div>
)}

export default newDeviceForm;