import * as React from 'react';
import Button from '@material-ui/core/Button'
import Picker from '../../../common/components/Picker/Picker'
import TextField from '@material-ui/core/TextField'
import { MainTheme } from '../../../utils/Themes/Themes';
import { MuiThemeProvider} from '@material-ui/core/styles'
import './newDeviceForm.css'

const newDeviceForm = (props: INewDeviceForm) => {return(
    <div className={"new-device-form"}>
        <MuiThemeProvider theme={MainTheme}>
            <Picker 
            label={"type"} 
            onChange={props.onTypeChangeHandles} 
            items={props.deviceTypes} 
            value={props.newDeviceType}/>
            <TextField 
            label={"title"} 
            onChange={props.onTitleChange}
            className={'text-field'}/>
        </MuiThemeProvider>
        <Button disabled={!props.isAddNewDeviceButtonActive} className={"button"} onClick={props.onAddNewDeviceButtonHandler}>add new device</Button>
    </div>
)}

export default newDeviceForm;