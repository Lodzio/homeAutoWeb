import {ADD_NEW_DEVICE, UPDATE_DEVICE, SET_DEVICES, DELETE_DEVICE} from '../action/actionTypes'

const initialState = {
    devices: Array<any>(),
    deviceTypes: [
        {label: 'Button', value: 'button'},
        {label: 'Sensor', value: 'sensor'},
    ]
}


const reducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_NEW_DEVICE:
            return {
                ...state,
                devices: [...state.devices, action.device]
            };
        case UPDATE_DEVICE:{
            const devices = [...state.devices];
            const index = devices.findIndex(device => device.id === action.device.id)
            devices[index] = action.device;
            return {
                ...state,
                devices
            }
        }
        case SET_DEVICES:
            return {
                ...state,
                devices: action.devices
            }
        case DELETE_DEVICE:{
            const devices = state.devices.filter(device => device.id !== action.device.id);
            return {
                ...state,
                devices
            }
        }
        default:
            return state;
    }
};

export default reducer;