import * as React from 'react';
import Settings from '../../components/settings/settings'
import {connect} from "react-redux";
import {sendNewDevice, sendUpdatedDevice} from '../../store/action'

class SettingsPage extends React.Component<ISettingsPageProps> {
    public state: ISettingsPageState = {
        newDevice: {
            title: '',
            type: '',
            value: null,
            id: 0,
            log: [],
            port: 0
        },
        selectedDeviceIndex: 0,
        isDeviceDetailsOpen: false,
        isAddNewDeviceFormOpen: false,
    };

    public constructor(props: ISettingsPageProps) {
        super(props);

    }

    public render() {
        return (
            <Settings
            onDeviceClick={this.onDeviceClickHandler}
            onTitleChange={this.onNewDeviceTitleChangeHandler}
            onDeviceEditSubmitHandler={this.onDeviceEditSubmitHandler}
            onDeviceEditCancelHandler={this.onDeviceEditCancelHandler}
            onDetailsCloseHandler={this.onDeviceDetailsCloseHandler}
            isDeviceDetailsOpen={this.state.isDeviceDetailsOpen}
            selectedDevice={this.props.devices[this.state.selectedDeviceIndex]}
            deviceTypes={this.props.deviceTypes}
            onAddNewDeviceFormOpenButtonHandler={this.onAddNewDeviceFormOpenButtonHandler}
            isAddNewDeviceFormOpen={this.state.isAddNewDeviceFormOpen}
            isAddNewDeviceButtonActive={this.isAddNewDeviceButtonActive()} 
            onAddNewDeviceButtonHandler={this.onAddNewDeviceButtonHandler}
            onTypeChangeHandles={this.onTypeChangeHandles}
            newDeviceType={this.state.newDevice.type}
            devices={this.props.devices}/>
        );
    }

    private onAddNewDeviceButtonHandler = () => {
        const {newDevice} = this.state
        this.props.addNewDevice(this.state.newDevice)
        this.setState({
            newDevice: {
                ...newDevice,
                title: '',
                type: '',
                value: null,
                id: 0,
                log: [],
                port: 0
            },
            isAddNewDeviceFormOpen: false,
        })
    }

    private onDeviceEditSubmitHandler = (device: IDevice) => {
        this.props.updateDevice(device)
        this.onDeviceDetailsCloseHandler();
    }

    private onDeviceEditCancelHandler = () => {
        this.onDeviceDetailsCloseHandler();
    }

    private onDeviceDetailsCloseHandler = () => {
        this.setState({
            isDeviceDetailsOpen: false
        })
    }

    private onDeviceClickHandler = (index: number) => {
        this.setState({
            selectedDeviceIndex: index,
            isDeviceDetailsOpen: true
        })
    }

    private onNewDeviceTitleChangeHandler = (e: any) => {
        this.setState({newDevice: {...this.state.newDevice, title: e.target.value}})
    }

    private onTypeChangeHandles = (typeValue: string) => {
        const deviceValue = typeValue === 'button'? false: 0;
        this.setState({newDevice: {...this.state.newDevice, type: typeValue, value: deviceValue}})
    }   

    private onAddNewDeviceFormOpenButtonHandler = () => {
        this.setState({isAddNewDeviceFormOpen: true})
    }

    private isAddNewDeviceButtonActive = () => {
        return (this.state.newDevice.title !== "" && this.state.newDevice.type !== "")
    }
}

const mapStateToProps = (state: any) => {
    return {
        deviceTypes: state.device.deviceTypes,
        devices: state.device.devices,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewDevice: (device: IDevice) => dispatch(sendNewDevice(device)),
        updateDevice: (device: IDevice) => dispatch(sendUpdatedDevice(device))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);