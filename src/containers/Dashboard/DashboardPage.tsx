import * as React from 'react';
import Dashboard from '../../components/dashboard/dashboard'
import {connect} from "react-redux";
import { updateDevice } from '../../store/action/index'

class DashboardPage extends React.Component<IDashboardPageProps> {

    public state: IDashboardPageState = {
        deviceDetailsOpen: false,
    }

    public constructor(props: IDashboardPageProps) {
        super(props);
    }

    public render() {
        return (
            <Dashboard 
            onDetailsCloseHandler={this.onDeviceDetailsEventHandler}
            devices={this.props.devices} 
            onDeviceClickHandler={this.onDeviceClickHandler}
            isDeviceDetailsOpen={this.state.deviceDetailsOpen}
            onDeviceDetailsClickHandler={this.onDeviceDetailsClickHandler}/>
        );
    }

    private onDeviceDetailsEventHandler = () => {
        this.setState({deviceDetailsOpen: false})
    }

    private onDeviceDetailsClickHandler = (index: number) => {
        this.setState({deviceDetailsOpen: true})
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