import Websocket from '../../websocket';
import * as RequestTypes from './requestTypes';

export const sendUpdatedDevice = (device: IDevice) => {
	return (dispatch: any) => {
		const data = {
			data: device,
			type: RequestTypes.UPDATE_DEVICE
		};
		Websocket.send(JSON.stringify(data));
	};
};

export const switchDevice = (device: IDevice) => {
	return (dispatch: any) => {
		const message = {
			data: device,
			type: RequestTypes.SWITCH_DEVICE
		};
		Websocket.send(JSON.stringify(message));
	};
};

export const sendDeleteRequest = (device: IDevice) => {
	return (dispatch: any) => {
		const data = {
			data: device,
			type: RequestTypes.DELETE_DEVICE
		};
		Websocket.send(JSON.stringify(data));
	};
};

export const sendNewDevice = (device: IDevice) => {
	return (dispatch: any) => {
		const data = {
			data: device,
			type: RequestTypes.CREATE_DEVICE
		};
		Websocket.send(JSON.stringify(data));
	};
};

export const fetchDevices = () => {
	return (dispatch: any) => {
		const data = {
			type: RequestTypes.FETCH_DEVICES
		};
		Websocket.send(JSON.stringify(data));
	};
};

export const fetchDetectedDevices = () => {
	return (dispatch: any) => {
		const data = {
			type: RequestTypes.FETCH_DETECTED_DEVICES
		};
		Websocket.send(JSON.stringify(data));
	};
};

export const fetchDeviceLogsById = (dispatch: any) => (id: any) => {
	const data = {
		type: RequestTypes.FETCH_LOGS_BY_ID,
		data: {
			id
		}
	};
	Websocket.send(JSON.stringify(data));
};
