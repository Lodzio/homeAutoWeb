interface IDevice {
    title: string,
    type: string,
    value: number,
    id: number,
    port: number,
    log: ILog[]
}

interface ILog {
    time: number,
    value: number
}

interface IDevicesList {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void,
}

interface IDevicesListItem {
    device: IDevice,
    onClickHandler?: () => void,
}

interface IDeviceDetailsProps {
    device: IDevice| null,
    deviceTypes: IPickerItem[],
    onSubmitHandler: (device: IDevice) => void,
    onCancelHandler: () => void,
    onDeleteHandler: (id: number) => void
}

interface IDeviceDetailsState {
    title: string,
    port: number,
}