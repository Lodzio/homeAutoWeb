import * as React from 'react';
import Dashboard from '../../components/dashboard/dashboard'
import {connect} from "react-redux";

class DashboardPage extends React.Component<IDashboardPageProps> {
    public state: IDashboardPageState = {
        test: null,
    };

    public constructor(props: IDashboardPageProps) {
        super(props);
    }

    public render() {
        return (
            <Dashboard devices={this.props.devices}/>
        );
    }


}

const mapStateToProps = (state: any) => {
    return {
        devices: state.device.devices,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);