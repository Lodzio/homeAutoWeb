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

export const sendNewDevice = (device: IDevice) => {
    return (dispatch: any) => {
        const data = {
            data: device,
            type: RequestTypes.UPDATE_DEVICE
        }
        Websocket.send(JSON.stringify(data));
    }
}