import {ADD_NEW_DEVICE} from '../action/actionTypes'

const initialState = {
    devices: [],
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
        default:
            return state;
    }
};

export default reducer;