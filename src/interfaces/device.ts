interface IDevice {
    title: string,
    type: string,
    value: any
}

interface IDevicesList {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void,
    onDetailsClickHandler: (index: number) => void,
}

interface IDevicesListItem {
    device: IDevice,
    onClickHandler: () => void,
    onDetailsClickHandler: () => void,
}

interface IDeviceDetails {
    device: IDevice
}