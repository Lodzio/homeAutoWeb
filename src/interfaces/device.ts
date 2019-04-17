interface IDevice {
    title: string,
    type: string,
    value: any,
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
    onDetailsClickHandler: (index: number) => void,
}

interface IDevicesListItem {
    device: IDevice,
    onClickHandler?: () => void,
    onDetailsClickHandler?: () => void,
}

interface IDeviceDetails {
    device: IDevice| null,
    selectedTypeLabel: string,
    onTitleChange: (e: any) => void,
    onSubmitButtonClick: () => void,
    onCancelButtonClick: () => void,
    onPortChange: (e: any) => void,
}