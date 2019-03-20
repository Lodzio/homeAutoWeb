import * as React from 'react';
import Button from '@material-ui/core/Button'

const settings = (props: ISettings) => {return(
    <div>
        <Button onClick={props.onAddNewDeviceButtonHandler}>add new device</Button>
    </div>
)}

export default settings;