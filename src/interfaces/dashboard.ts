interface IDashboardProps {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void,
}

interface IDashboardPageProps {
    devices: IDevice[],
    deviceTypes: IPickerItem[],
    switchDevice: (device: IDevice) => void
}