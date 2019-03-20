import * as React from 'react';
import Settings from '../../components/settings/settings'
import {connect} from "react-redux";
import {addNewDevice} from '../../store/action'

class SettingsPage extends React.Component<ISettingsPageProps> {
    public state: ISettingsPageState = {
        newDevice: {
            title: '',
        },
    };

    public constructor(props: ISettingsPageProps) {
        super(props);

    }

    public render() {
        return (
            <Settings 
            isAddNewDeviceButtonActive={this.isAddNewDeviceButtonActive()} 
            onAddNewDeviceButtonHandler={() => this.props.addNewDevice(this.state.newDevice)}/>
        );
    }

    private isAddNewDeviceButtonActive = () => {
        return (this.state.newDevice.title !== "")
    }
}

const mapStateToProps = (state: any) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewDevice: (device: IDevice) => dispatch(addNewDevice(device)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);