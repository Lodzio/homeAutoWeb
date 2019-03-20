import * as React from 'react';
import Settings from '../../components/settings/settings'
import {connect} from "react-redux";
import {addNewDevice} from '../../store/action'

class SettingsPage extends React.Component<ISettingsPageProps> {
    public state: ISettingsPageState = {
        newDevice: {
            title: '',
            type: ''
        },
        isAddNewDeviceFormOpen: false,
    };

    public constructor(props: ISettingsPageProps) {
        super(props);

    }

    public render() {
        return (
            <Settings
            deviceTypes={this.props.deviceTypes}
            onAddNewDeviceFormOpenButtonHandler={this.onAddNewDeviceFormOpenButtonHandler}
            isAddNewDeviceFormOpen={this.state.isAddNewDeviceFormOpen}
            isAddNewDeviceButtonActive={this.isAddNewDeviceButtonActive()} 
            onAddNewDeviceButtonHandler={() => this.props.addNewDevice(this.state.newDevice)}
            onTypeChangeHandles={this.onTypeChangeHandles}
            newDeviceType={this.state.newDevice.type}/>
        );
    }

    private onTypeChangeHandles = (value: string) => {
        this.setState({newDevice: {type: value}})
    }   

    private onAddNewDeviceFormOpenButtonHandler = () => {
        this.setState({isAddNewDeviceFormOpen: true})
    }

    private isAddNewDeviceButtonActive = () => {
        return (this.state.newDevice.title !== "")
    }
}

const mapStateToProps = (state: any) => {
    return {
        deviceTypes: state.device.deviceTypes
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewDevice: (device: IDevice) => dispatch(addNewDevice(device)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);