import * as React from 'react';
import Settings from '../../components/settings/settings'
import {connect} from "react-redux";
import {sendNewDevice, sendUpdatedDevice, sendDeleteRequest} from '../../store/action'
import AddNewDevice from './AddNewDevice/AddNewDevicePage'
import Modal from '../../common/components/Modal/Modal'

class SettingsPage extends React.Component<ISettingsPageProps> {
    public state: ISettingsPageState = {
        selectedDeviceIndex: 0,
        isDeviceDetailsOpen: false,
    };

    public constructor(props: ISettingsPageProps) {
        super(props);
    }

    public render() {
        return (
            <div>
            <Settings
            onDeviceDeleteHandler={this.onDeviceDeleteHandler}
            onDeviceClick={this.onDeviceClickHandler}
            onDeviceEditSubmitHandler={this.onDeviceEditSubmitHandler}
            onDeviceEditCancelHandler={this.onDeviceEditCancelHandler}
            onDetailsCloseHandler={this.onDeviceDetailsCloseHandler}
            isDeviceDetailsOpen={this.state.isDeviceDetailsOpen}
            selectedDevice={this.props.devices[this.state.selectedDeviceIndex]}
            devices={this.props.devices}/>
            <Modal open={true} onClose={()=>console.log()}><AddNewDevice/></Modal>

            </div>
        );
    }

    private onDeviceDeleteHandler = (id: number) => {
        const Device = this.props.devices.find(device => device.id === id);
        if (Device){
            this.props.sendDeleteRequest(Device)
            this.onDeviceDetailsCloseHandler();
        }
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