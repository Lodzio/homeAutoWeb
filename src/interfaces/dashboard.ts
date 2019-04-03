interface IDashboardProps {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void,
    onDeviceDetailsClickHandler: (index: number) => void,
    isDeviceDetailsOpen: boolean,
    onDetailsCloseHandler: ()=>void,
    selectedDevice: IDevice|null,
    selectedTypeLabel: string
}

interface IDashboardPageState {
    deviceDetailsOpen: boolean,
    selectedDevice: IDevice|null,
}

interface IDashboardPageProps {
    devices: IDevice[],
    deviceTypes: IPickerItem[],
    updateDevice: (device: IDevice, index: number) => void
}