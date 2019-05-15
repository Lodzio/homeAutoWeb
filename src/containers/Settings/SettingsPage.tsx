import * as React from 'react';
import Settings from '../../components/settings/settings'
import {connect} from "react-redux";
import {sendNewDevice, sendUpdatedDevice, sendDeleteRequest} from '../../store/action'
import {getLowestUnusedId} from '../../utils/ArrayUtils/ArrayTuils'

class SettingsPage extends React.Component<ISettingsPageProps> {
    public state: ISettingsPageState = {
        newDevice: {
            title: '',
            type: '',
            value: 0,
            id: getLowestUnusedId(this.props.devices),
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

    public componentWillReceiveProps(props: ISettingsPageProps){
        const {newDevice} = this.state
        this.setState({
            newDevice: {
                ...newDevice,
                id: getLowestUnusedId(props.devices),
            },
        })
    }

    public render() {
        return (
            <Settings
            onDeviceDeleteHandler={this.onDeviceDeleteHandler}
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

    private onDeviceDeleteHandler = (id: number) => {
        const Device = this.props.devices.find(device => device.id === id);
        if (Device){
            this.props.sendDeleteRequest(Device)
            this.onDeviceDetailsCloseHandler();
        }
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
                id: getLowestUnusedId(this.props.devices),
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
        const deviceValue = 0;
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
        updateDevice: (device: IDevice) => dispatch(sendUpdatedDevice(device)),
        sendDeleteRequest: (device: IDevice) => dispatch(sendDeleteRequest(device))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);