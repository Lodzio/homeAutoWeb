import * as React from 'react';
import Dashboard from '../../components/dashboard/dashboard'
import {connect} from "react-redux";
import { updateDevice } from '../../store/action/index'

class DashboardPage extends React.Component<IDashboardPageProps> {

    public constructor(props: IDashboardPageProps) {
        super(props);
    }

    public render() {
        return (
            <Dashboard devices={this.props.devices} onDeviceClickHandler={this.onDeviceClickHandler}/>
        );
    }

    private onDeviceClickHandler = (index: number) => {
        const device = this.props.devices[index];
        if (device.type === 'button'){
            device.value = !device.value
        }
        this.props.updateDevice(device, index);
    }
}

const mapStateToProps = (state: any) => {
    return {
        devices: state.device.devices,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateDevice: (device: IDevice, index: number) => dispatch(updateDevice(device, index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);