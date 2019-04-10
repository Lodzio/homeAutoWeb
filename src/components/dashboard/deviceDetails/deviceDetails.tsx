import * as React from 'react'
import TextField from '../../../common/components/TextField/TextField'
import Button from '@material-ui/core/Button'
import './deviceDetails.css'

const deviceDetails = (props: IDeviceDetails) => {
    const content = props.device && 
    <div className={'device-details'}>
        <div className={"content"}>
        <TextField 
            label={"title"} 
            onChange={props.onTitleChange}
            defaultValue={props.device.title}/>
        <TextField
            label={"port"} 
            defaultValue={String(props.device.port)}
            onChange={props.onPortChange}/>
        <TextField 
            label={"type"} 
            defaultValue={props.selectedTypeLabel}
            disabled={true}/>
        <TextField 
            label={"state"} 
            defaultValue={props.device.value}
            disabled={true}/>
        <TextField
            label={"id"} 
            defaultValue={String(props.device.id)}
            disabled={true}/>
        </div>
        <div className={"buttons"}>
            <Button className={"submit"} onClick={props.onSubmitButtonClick}>Submit</Button>
            <Button className={"cancel"} onClick={props.onCancelButtonClick}>Cancel</Button>
        </div>        
    </div>  
    return content;
}

export default deviceDetails;