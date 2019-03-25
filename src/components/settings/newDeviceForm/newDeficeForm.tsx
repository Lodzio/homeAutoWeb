import * as React from 'react';
import Button from '@material-ui/core/Button'
import Picker from '../../../common/components/Picker/Picker'
import TextField from '@material-ui/core/TextField'

const newDeviceForm = (props: INewDeviceForm) => {return(
    <div>
        <Button  onClick={props.onAddNewDeviceButtonHandler}>add new device</Button>
        <Picker 
        label={"type"} 
        onChange={props.onTypeChangeHandles} 
        items={props.deviceTypes} 
        value={props.newDeviceType}/>
        <TextField label={"title"} onChange={props.onTitleChange}/>
    </div>
)}

export default newDeviceForm;