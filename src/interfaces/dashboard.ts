interface IDashboardProps {
    devices: IDevice[],
    onDeviceClickHandler: (index: number) => void
}

interface IDashboardPageProps {
    devices: IDevice[]
    updateDevice: (device: IDevice, index: number) => void
}