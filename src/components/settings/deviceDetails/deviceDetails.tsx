import * as React from 'react';
import { connect } from 'react-redux';
import { fetchDeviceLogsById } from '../../../store/action';
import TextField from '../../../common/components/TextField/TextField';
import Button from '@material-ui/core/Button';
import SubmitDialog from '../../../common/components/SubmitDialog/SubmitDialog';
import Chart from "react-apexcharts";
import * as moment from 'moment'
import './deviceDetails.css';

class DeviceDetails extends React.Component<IDeviceDetailsProps> {
	public state: IDeviceDetailsState = {
		title: ''
	};

	private submitDialogHandler: any = null;

	public constructor(props: IDeviceDetailsProps) {
		super(props);
		if (props.device) {
			this.state.title = props.device.title;
		}
	}

	public componentWillReceiveProps(props: IDeviceDetailsProps) {
		if (props.device) {
			this.state.title = props.device.title;
		}
	}

	public componentDidMount() {
		if (this.props.device) {
			this.props.fetchDeviceLogsById(this.props.device.id);
		}
	}

	public render() {
		const { device } = this.props;
		if (!device) {
			return null;
		} else {
			let chart = null;
			if (device.logs) {
				chart = (<Chart
					options={{
						xaxis: {

							categories: device.logs.map(log => moment(log.timestamp).format('HH:mm:ss'))
						}
					}}
					series={[
						{
							name: 'logs',
							data: device.logs.map(log => log.value)
						}
					]}
				/>)
			}
			const deviceType = this.props.deviceTypes.find((type) => type.value === device.type);
			const typeLabel = deviceType ? deviceType.label : '';
			return (
				<div className={'device-details'}>
					<div style={{ width: 400 }}>
						{chart}
					</div>
					<div className={'content'}>
						<TextField label={'title'} onChange={this.onTitleChange} defaultValue={this.state.title} />
						<TextField label={'type'} defaultValue={typeLabel} disabled={true} />
						<TextField label={'state'} defaultValue={String(device.value)} disabled={true} />
						<TextField label={'id'} defaultValue={String(device.id)} disabled={true} />
					</div>
					<div className={'buttons'}>
						<Button className={'submit'} onClick={this.onSubmitClickHandler}>
							Submit
						</Button>
						<Button className={'delete'} onClick={this.onDeleteHandler}>
							Delete
						</Button>
						<Button className={'cancel'} onClick={this.props.onCancelHandler}>
							Cancel
						</Button>
					</div>
					<SubmitDialog
						ref={(e) => (this.submitDialogHandler = e)}
						label={'Are you sure you want to delete this device?'}
					/>
				</div>
			);
		}
	}

	private onDeleteHandler = () => {
		const { device } = this.props;
		if (device) {
			this.submitDialogHandler.activateDialog(
				() => this.props.onDeleteHandler(device.id),
				() => {
					console.log("'cancel' clicked");
				}
			);
		}
	};

	private onSubmitClickHandler = () => {
		if (this.props.device) {
			const device = { ...this.props.device };
			device.title = this.state.title;
			this.props.onSubmitHandler(device);
		}
	};

	private onTitleChange = (e: any) => {
		this.setState({
			title: e.target.value
		});
	};
}

const mapStateToProps = (state: any) => {
	return {
		deviceTypes: state.device.deviceTypes
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchDeviceLogsById: fetchDeviceLogsById(dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetails);
