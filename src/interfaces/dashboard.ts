interface IDashboardProps {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void,
    onDeviceDetailsClickHandler: (index: number) => void,
    isDeviceDetailsOpen: boolean,
    onDetailsCloseHandler: ()=>void
}

interface IDashboardPageState {
    deviceDetailsOpen: boolean
}

interface IDashboardPageProps {
    devices: IDevice[]
    updateDevice: (device: IDevice, index: number) => void
}