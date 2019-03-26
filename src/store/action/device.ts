import {ADD_NEW_DEVICE, UPDATE_DEVICE} from './actionTypes'

export const addNewDevice = (device: IDevice) => {
    return {
        device,
        type: ADD_NEW_DEVICE
    }
}

export const updateDevice = (device: IDevice, index: number) => {
    return {
        device,
        index,
        type: UPDATE_DEVICE
    }
}