import * as React from 'react';
import Dashboard from '../../components/dashboard/dashboard'
import {connect} from "react-redux";
import { updateDevice } from '../../store/action/index'

class DashboardPage extends React.Component<IDashboardPageProps> {

    public state: IDashboardPageState = {
        deviceDetailsOpen: false,
        selectedDevice: null
    }

    public constructor(props: IDashboardPageProps) {
        super(props);
    }

    public render() {
        const {selectedDevice} = this.state;
        return (
            <Dashboard 
            onDetailsCloseHandler={this.onDeviceDetailsEventHandler}
            devices={this.props.devices} 
            onDeviceClickHandler={this.onDeviceClickHandler}
            isDeviceDetailsOpen={this.state.deviceDetailsOpen}
            onDeviceDetailsClickHandler={this.onDeviceDetailsClickHandler}
            selectedDevice={this.state.selectedDevice}
            selectedTypeLabel={selectedDevice? this.getTypeLabel(selectedDevice.type):''}
            />
        );
    }

    private getTypeLabel = (value: string) => {
        const result = this.props.deviceTypes.find((type) => type.value === value);
        return result? result.label: '';
    }
    private onDeviceDetailsEventHandler = () => {
        this.setState({deviceDetailsOpen: false,
            selectedDevice: null
        })
    }

    private onDeviceDetailsClickHandler = (index: number) => {
        this.setState({deviceDetailsOpen: true,
            selectedDevice: this.props.devices[index]
        })
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
        deviceTypes: state.device.deviceTypes
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateDevice: (device: IDevice, index: number) => dispatch(updateDevice(device, index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);