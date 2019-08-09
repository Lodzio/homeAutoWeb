import * as React from 'react';
import NewDeficeForm from '../../../components/settings/newDeviceForm/newDeficeForm'
import {connect} from "react-redux";
import {sendNewDevice, fetchDetectedDevices} from '../../../store/action'
import {getLowestUnusedId} from '../../../utils/ArrayUtils/ArrayTuils'

class AddNewDevice extends React.Component<IAddNewDevicePageProps> {
    public state: IAddNewDevicePageState = {
        title: '',
        type: '',
        value: 0,
        id: getLowestUnusedId(this.props.devices),
        log: [],
    };

    public constructor(props: IAddNewDevicePageProps) {
        super(props);
    }

    public componentDidMount(){
        this.props.fetchDetectedDevices();
    }

    public componentWillReceiveProps(props: IAddNewDevicePageProps){
        this.setState({
            id: getLowestUnusedId(props.devices),
        })
    }

    public render() {
        const isAddNewDeviceButtonActive = false;
        return (
            <div>
                <NewDeficeForm
                detectedDevices={this.props.detectedDevices}
                onDetectedDeviceClick={this.onDetectedDeviceClick}
                title={this.state.title}
                onTitleChange={this.onTitleChange}
                deviceTypes={this.props.deviceTypes}
                isAddNewDeviceButtonActive={isAddNewDeviceButtonActive}
                onAddNewDeviceButtonHandler={this.onAddNewDeviceButtonHandler}
                newDeviceType={this.state.type}
                onTypeChangeHandles={this.onTypeChangeHandles}/>
            </div>
            
        );
    }
    private onDetectedDeviceClick = (id: any) => {
        console.log(event)
        const device = this.props.detectedDevices[id];
        this.setState({
            title: device.title,
            id: device.title,
            type: 'button'
        })
    }
    private onTitleChange = (event: any) => {
        console.log(event)
        this.setState({
            title: event.target.value
        })
    }
    private onAddNewDeviceButtonHandler = () => {
        console.log('dodaj nowe')
    }
    private onTypeChangeHandles = (type: string) => {
        console.log(event)
        this.setState({
            type
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