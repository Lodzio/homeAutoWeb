interface IDashboardProps {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void,
}

interface IDashboardPageProps {
    devices: IDevice[],
    deviceTypes: IPickerItem[],
    updateDevice: (device: IDevice, index: number) => void
}