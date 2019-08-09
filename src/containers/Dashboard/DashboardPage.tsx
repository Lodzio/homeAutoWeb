import * as React from 'react';
import Dashboard from '../../components/dashboard/dashboard'
import {connect} from "react-redux";
import { switchDevice, fetchDevices } from '../../store/action/index'

class DashboardPage extends React.Component<IDashboardPageProps> {

    public constructor(props: IDashboardPageProps) {
        super(props);
    }

    public componentDidMount(){
        this.props.fetchDevices();
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
        this.props.switchDevice(device);
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
        switchDevice: (device: IDevice) => dispatch(switchDevice(device)),
        fetchDevices: () => dispatch(fetchDevices())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);