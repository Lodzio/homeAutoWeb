interface IDevice {
    title: string,
    type: string
}

interface IDevicesList {
    devices: IDevice[],
}

interface IDevicesListItem {
    device: IDevice,
}