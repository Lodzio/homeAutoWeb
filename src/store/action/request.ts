import Websocket from '../../websocket'
import * as RequestTypes from './requestTypes'

export const sendUpdatedDevice = (device: IDevice) => {
    return (dispatch: any) => {
        const data = {
            data: device,
            type: RequestTypes.UPDATE_DEVICE
        }
        Websocket.send(JSON.stringify(data));
    }
}

export const sendDeleteRequest = (device: IDevice) => {
    return (dispatch: any) => {
        const data = {
            data: device,
            type: RequestTypes.DELETE_DEVICE
        }
        Websocket.send(JSON.stringify(data));
    }
}

export const sendNewDevice = (device: IDevice) => {
    return (dispatch: any) => {
        const data = {
            data: device,
            type: RequestTypes.CREATE_DEVICE
        }
        Websocket.send(JSON.stringify(data));
    }
}