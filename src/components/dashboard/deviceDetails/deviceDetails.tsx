import * as React from 'react'
import TextField from '../../../common/components/TextField/TextField'
import './deviceDetails.css'

const deviceDetails = (props: IDeviceDetails) => {
    const content = props.device && 
    <div className={'device-details'}>
        <TextField 
            label={"title"} 
            onChange={(e) => console.log(e.target.value)}
            defaultValue={props.device.title}/>
        <TextField 
            label={"type"} 
            defaultValue={props.selectedTypeLabel}
            disabled={true}/>
        <TextField 
            label={"state"} 
            defaultValue={props.device.value}
            disabled={true}/>
    </div>  
    return content;
}

export default deviceDetails;