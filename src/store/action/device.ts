import {ADD_NEW_DEVICE} from './actionTypes'

export const addNewDevice = (device: IDevice) => {
    return {
        device,
        type: ADD_NEW_DEVICE
    }
}