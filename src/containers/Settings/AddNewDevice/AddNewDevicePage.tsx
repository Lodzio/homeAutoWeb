import * as React from 'react';
import NewDeficeForm from '../../../components/settings/newDeviceForm/newDeficeForm'
import {connect} from "react-redux";
import {sendNewDevice, fetchDetectedDevices} from '../../../store/action'
import {getLowestUnusedId} from '../../../utils/ArrayUtils/ArrayTuils'

class AddNewDevice extends React.Component<IAddNewDevicePageProps> {
    public state: IAddNewDevicePageState = {
        device: {
            title: '',
            type: '',
            value: 0,
            id: getLowestUnusedId(this.props.devices),
            interface: null,
            log: [],
        }
    };

    public constructor(props: IAddNewDevicePageProps) {
        super(props);
    }

    public componentDidMount(){
        this.props.fetchDetectedDevices();
    }

    public componentWillReceiveProps(props: IAddNewDevicePageProps){
        this.setState({
            device :{
                ...this.state.device,
                id: getLowestUnusedId(props.devices),
            }
        })
    }

    public render() {
        const {device} = this.state;
        const isAddNewDeviceButtonActive = device.title !== '';
        return (
            <div>
                <NewDeficeForm
                detectedDevices={this.props.detectedDevices}
                onDetectedDeviceClick={this.onDetectedDeviceClick}
                title={device.title}
                onTitleChange={this.onTitleChange}
                deviceTypes={this.props.deviceTypes}
                isAddNewDeviceButtonActive={isAddNewDeviceButtonActive}
                onAddNewDeviceButtonHandler={this.onAddNewDeviceButtonHandler}
                newDeviceType={device.type}
                onTypeChangeHandles={this.onTypeChangeHandles}/>
            </div>
            
        );
    }
    private onDetectedDeviceClick = (id: any) => {
        const device = this.props.detectedDevices[id];
        this.setState({
            device: {
                ...this.state.device,
                ...device
            }
        })
    }
    private onTitleChange = (event: any) => {
        this.setState({
            device: {
                ...this.state.device,
                title: event.target.value
            }
        })
    }
    private onAddNewDeviceButtonHandler = () => {
        this.props.addNewDevice(this.state.device)
        this.props.onCloseComponent();
    }
    private onTypeChangeHandles = (type: string) => {
        this.setState({
            device: {
                ...this.state.device,
                type
            }
        })
    }
}

const mapStateToProps = (state: any) => {
    return {
        deviceTypes: state.device.deviceTypes,
        devices: state.device.devices,
        detectedDevices: state.device.detectedDevices
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewDevice: (device: IDevice) => dispatch(sendNewDevice(device)),
        fetchDetectedDevices: () => dispatch(fetchDetectedDevices())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDevice);