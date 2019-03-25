import * as React from 'react';
import NewDeviceForm from './newDeviceForm/newDeficeForm'
import Button from '@material-ui/core/Button'
import './settings.css'

const settings = (props: ISettings) => {
    return(
    <div className={"setting"}>
        {props.isAddNewDeviceFormOpen?
        <NewDeviceForm 
        onTitleChange={props.onTitleChange}
        deviceTypes={props.deviceTypes}
        isAddNewDeviceButtonActive={props.isAddNewDeviceButtonActive}
        onAddNewDeviceButtonHandler={props.onAddNewDeviceButtonHandler}
        newDeviceType={props.newDeviceType}
        onTypeChangeHandles={props.onTypeChangeHandles}/>:
        <Button className={'button'} onClick={props.onAddNewDeviceFormOpenButtonHandler}>create new device</Button>}
    </div>
)}

export default settings;