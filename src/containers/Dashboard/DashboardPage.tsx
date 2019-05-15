import * as React from 'react';
import Dashboard from '../../components/dashboard/dashboard'
import {connect} from "react-redux";
import { sendUpdatedDevice } from '../../store/action/index'

class DashboardPage extends React.Component<IDashboardPageProps> {

    public constructor(props: IDashboardPageProps) {
        super(props);
    }

    public render() {
        return (
            <Dashboard 
            devices={this.props.devices} 
            onDeviceClickHandler={this.onDeviceClickHandler}
            />
        );
    }

    private onDeviceClickHandler = (index: number) => {
        const device = this.props.devices[index];
        if (device.type === 'button'){
            device.value = (device.value + 1)%2;
        }
        this.props.updateDevice(device);
    }
}

const mapStateToProps = (state: any) => {
    return {
        devices: state.device.devices,
        deviceTypes: state.device.deviceTypes
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateDevice: (device: IDevice) => dispatch(sendUpdatedDevice(device))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);