import * as React from 'react';
import Button from '@material-ui/core/Button'
import Picker from '../../../common/components/Picker/Picker'
import TextField from '../../../common/components/TextField/TextField'
import DeviesTable from '../devicesTable/devicesTable'
import './newDeviceForm.css'

const newDeviceForm = (props: INewDeviceForm) => {
    return (
        <div className={"new-device-form"}>
            <DeviesTable
                devices={props.detectedDevices}
                onDeviceClick={props.onDetectedDeviceClick} />
            <Picker
                label={"type"}
                onChange={props.onTypeChangeHandles}
                items={props.deviceTypes}
                value={props.newDeviceType} />
            <Picker
                label={"interface"}
                onChange={props.onInterfaceChangeHandles}
                items={[{ label: 'Shelly', value: 'Shelly' }, { label: 'DS18B20', value: 'DS18B20' }]}
                value={props.interface} />
            <TextField
                label={"title"}
                value={props.title}
                onChange={props.onTitleChange}
                className={'text-field'} />
            <TextField
                label={"id"}
                value={props.id}
                onChange={props.onIdChange}
                className={'text-field'} />
            <Button disabled={!props.isAddNewDeviceButtonActive} className={"button"} onClick={props.onAddNewDeviceButtonHandler}>add new device</Button>
        </div>
    )
}

export default newDeviceForm;