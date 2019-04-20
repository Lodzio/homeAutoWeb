import {ADD_NEW_DEVICE, UPDATE_DEVICE, SET_DEVICES} from './actionTypes'
import * as RequestTypes from './requestTypes'

export const receiveMessage = (message: any) => {
    return (dispatch: any) => {
        console.log(message.data)
        const result = JSON.parse(message.data);
        console.log(result)
        switch (result.type) {
            case RequestTypes.FETCH_DEVICES:
                dispatch(setDevices(result.data));
                break;
            case RequestTypes.UPDATE_DEVICE:
                dispatch(updateDevice(result.data));
                break;
            case RequestTypes.CREATE_DEVICE:
                dispatch(addNewDevice(result.data));
                break;
        }
    }
}

const setDevices = (devices: IDevice[]) => {
    return {
        devices,
        type: SET_DEVICES
    }
}

const updateDevice = (device: IDevice) => {
    return {
        device,
        type: UPDATE_DEVICE
    }
}

const addNewDevice = (device: IDevice) => {
    return {
        device,
        type: ADD_NEW_DEVICE
    }
}