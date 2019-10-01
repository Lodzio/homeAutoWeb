import {
	ADD_NEW_DEVICE,
	UPDATE_DEVICE,
	SET_DEVICES,
	DELETE_DEVICE,
	SET_DETECTED_DEVICES,
	SET_DEVICE_LOGS
} from './actionTypes';
import * as RequestTypes from './requestTypes';

export const receiveMessage = (message: any, notificationHandler: any) => {
	return (dispatch: any) => {
		const result = JSON.parse(message.data);
		switch (result.type) {
			case RequestTypes.FETCH_DEVICES:
				dispatch(setDevices(result.data));
				break;
			case RequestTypes.FETCH_DETECTED_DEVICES:
				dispatch(setDetectedDevices(result.data));
				break;
			case RequestTypes.FETCH_LOGS_BY_ID:
				dispatch(setDeviceLogs(result.data));
				break;
			case RequestTypes.UPDATE_DEVICE:
				dispatch(updateDevice(result.data));
				break;
			case RequestTypes.CREATE_DEVICE:
				dispatch(addNewDevice(result.data));
				break;
			case RequestTypes.DELETE_DEVICE:
				dispatch(deleteDevice(result.data));
				break;
			case RequestTypes.ERROR:
				notificationHandler.showError(result.data);
				break;
		}
	};
};

const setDevices = (devices: IDevice[]) => {
	return {
		devices,
		type: SET_DEVICES
	};
};

const setDeviceLogs = (data: { id: string; logs: { value: number; timestamp: number } }) => {
	console.log('setDeviceLogs', data);
	return {
		id: data.id,
		logs: data.logs,
		type: SET_DEVICE_LOGS
	};
};

const setDetectedDevices = (devices: IDevice[]) => {
	return {
		devices,
		type: SET_DETECTED_DEVICES
	};
};

const updateDevice = (device: IDevice) => {
	return {
		device,
		type: UPDATE_DEVICE
	};
};

const deleteDevice = (device: IDevice) => {
	return {
		device,
		type: DELETE_DEVICE
	};
};

const addNewDevice = (device: IDevice) => {
	return {
		device,
		type: ADD_NEW_DEVICE
	};
};
