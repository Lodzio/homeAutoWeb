import {ADD_NEW_DEVICE, UPDATE_DEVICE, SET_DEVICES, DELETE_DEVICE} from './actionTypes'
import * as RequestTypes from './requestTypes'

export const receiveMessage = (message: any) => {
    return (dispatch: any) => {
        const result = JSON.parse(message.data);
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
            case RequestTypes.DELETE_DEVICE:
                dispatch(deleteDevice(result.data))
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

const deleteDevice = (device: IDevice) => {
    return {
        device,
        type: DELETE_DEVICE
    }
}

const addNewDevice = (device: IDevice) => {
    return {
        device,
        type: ADD_NEW_DEVICE
    }
}