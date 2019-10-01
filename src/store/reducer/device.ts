import {
	ADD_NEW_DEVICE,
	UPDATE_DEVICE,
	SET_DEVICES,
	DELETE_DEVICE,
	SET_DETECTED_DEVICES,
	SET_DEVICE_LOGS
} from '../action/actionTypes';

const initialState = {
	devices: Array<any>(),
	detectedDevices: Array<any>(),
	deviceTypes: [ { label: 'Button', value: 'button' }, { label: 'Sensor', value: 'sensor' } ]
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ADD_NEW_DEVICE:
			return {
				...state,
				devices: [ ...state.devices, action.device ]
			};
		case UPDATE_DEVICE: {
			const devices = [ ...state.devices ];
			const index = devices.findIndex((device) => device.id === action.device.id);
			devices[index] = action.device;
			return {
				...state,
				devices
			};
		}
		case SET_DEVICES:
			return {
				...state,
				devices: action.devices
			};
		case SET_DETECTED_DEVICES: {
			return {
				...state,
				detectedDevices: action.devices
			};
		}
		case DELETE_DEVICE: {
			const devices = state.devices.filter((device) => device.id !== action.device.id);
			return {
				...state,
				devices
			};
		}
		case SET_DEVICE_LOGS: {
			const deviceIndex = state.devices.findIndex((device) => device.id === action.id);
			if (deviceIndex !== -1) {
				const devices = [ ...state.devices ];
				devices[deviceIndex] = { ...devices[deviceIndex], logs: action.logs };
				return {
					...state,
					devices
				};
			} else {
				return state;
			}
		}
		default:
			return state;
	}
};

export default reducer;
