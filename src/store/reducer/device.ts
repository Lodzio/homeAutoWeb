import {ADD_NEW_DEVICE, UPDATE_DEVICE} from '../action/actionTypes'

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
        case UPDATE_DEVICE:
            const devices = [...state.devices];
            devices[action.index] = action.device;
            return {
                ...state,
                devices
            }
        default:
            return state;
    }
};

export default reducer;