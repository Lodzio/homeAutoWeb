import * as React from 'react'
import TextField from '../../../common/components/TextField/TextField'
import './deviceDetails.css'

const deviceDetails = (props: IDeviceDetails) => {return(
        <div className={'device-details'}>
            <TextField 
                label={"title"} 
                onChange={(e) => console.log(e.target.value)}/>
            {props.device.type}
        </div>
    )
}

export default deviceDetails;