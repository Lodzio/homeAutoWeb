interface IDashboardProps {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void,
}

interface IDashboardPageProps {
    devices: IDevice[],
    fetchDevices: () => void
    deviceTypes: IPickerItem[],
    switchDevice: (device: IDevice) => void
}