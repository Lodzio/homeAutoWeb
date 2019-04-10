interface IDashboardProps {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void,
    onDeviceDetailsClickHandler: (index: number) => void,
    isDeviceDetailsOpen: boolean,
    onDetailsCloseHandler: ()=>void,
    selectedDevice: IDevice|null,
    selectedTypeLabel: string,
    onDeviceTitleChangeHandler: (e: any) => void,
    onSubmitDeviceEditButtonClick: () => void,
    onCancelDeviceEditButtonClick: () => void,
    onDevicePortChangeHandler: (e: any) => void
}

interface IDashboardPageState {
    deviceDetailsOpen: boolean,
    selectedDevice: IDevice|null,
    selectedDeviceIndex: number,
}

interface IDashboardPageProps {
    devices: IDevice[],
    deviceTypes: IPickerItem[],
    updateDevice: (device: IDevice, index: number) => void
}