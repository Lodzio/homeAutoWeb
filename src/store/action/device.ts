import {ADD_NEW_DEVICE, UPDATE_DEVICE, SET_DEVICES} from './actionTypes'

export const addNewDevice = (device: IDevice) => {
    return {
        device,
        type: ADD_NEW_DEVICE
    }
}

export const fetchDevices = (data: any) => {
    setDevices(data);
}

const setDevices = (devices: IDevice[]) => {
    return {
        devices,
        type: SET_DEVICES
    }
}

export const updateDevice = (device: IDevice, index: number) => {
    return {
        device,
        index,
        type: UPDATE_DEVICE
    }
}