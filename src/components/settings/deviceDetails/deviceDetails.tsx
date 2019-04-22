import * as React from 'react'
import {connect} from "react-redux";
import TextField from '../../../common/components/TextField/TextField'
import Button from '@material-ui/core/Button'
import SubmitDialog from '../../../common/components/SubmitDialog/SubmitDialog'
import './deviceDetails.css'

class DeviceDetails extends React.Component<IDeviceDetailsProps>{

    public state: IDeviceDetailsState = {
        title: '',
        port: 0,
    }

    private submitDialogHandler: any = null;

    public constructor(props: IDeviceDetailsProps){
        super(props)
        if (props.device){
            this.state.title = props.device.title;
            this.state.port = props.device.port;
        }
    }

    public componentWillReceiveProps(props: IDeviceDetailsProps){
        if (props.device){
            this.state.title = props.device.title;
            this.state.port = props.device.port;
        }
    }

    public render(){
        const {device} = this.props;
        if (!device){
            return null;
        } else {
            const deviceType = this.props.deviceTypes.find(type => type.value === device.type);
            const typeLabel = deviceType? deviceType.label: '';
            return(
                <div className={'device-details'}>
                    <div className={"content"}>
                    <TextField 
                        label={"title"} 
                        onChange={this.onTitleChange}
                        defaultValue={this.state.title}/>
                    <TextField
                        label={"port"} 
                        defaultValue={String(this.state.port)}
                        onChange={this.onPortChange}/>
                    <TextField 
                        label={"type"} 
                        defaultValue={typeLabel}
                        disabled={true}/>
                    <TextField 
                        label={"state"} 
                        defaultValue={device.value}
                        disabled={true}/>
                    <TextField
                        label={"id"} 
                        defaultValue={String(device.id)}
                        disabled={true}/>
                    </div>
                    <div className={"buttons"}>
                        <Button className={"submit"} onClick={this.onSubmitClickHandler}>Submit</Button>
                        <Button className={"delete"} onClick={this.onDeleteHandler}>Delete</Button>
                        <Button className={"cancel"} onClick={this.props.onCancelHandler}>Cancel</Button>
                    </div>       
                    <SubmitDialog 
                        ref={e => this.submitDialogHandler = e} 
                        label={'Are you sure you want to delete this device?'}/> 
                </div>  
            )
        }
    }

    private onDeleteHandler = () => {
        const {device} = this.props;
        if (device){
            this.submitDialogHandler.activateDialog(
                () => this.props.onDeleteHandler(device.id), 
                () => {console.log('\'cancel\' clicked')})
        }
    }

    private onSubmitClickHandler = () => {
        if (this.props.device){
            const device = {...this.props.device};
            device.title = this.state.title;
            device.port = this.state.port;
            this.props.onSubmitHandler(device);
        }
    }

    private onTitleChange = (e: any) => {
        this.setState({
            title: e.target.value
        })
    }

    private onPortChange = (e: any) => {
        this.setState({
            port: Number(e.target.value)
        })
    }
}

const mapStateToProps = (state: any) => {
    return {
        deviceTypes: state.device.deviceTypes,
    }
};
export default connect(mapStateToProps)(DeviceDetails);