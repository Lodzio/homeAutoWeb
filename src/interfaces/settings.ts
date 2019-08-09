interface ISettingsPageProps {
    addNewDevice: (device: IDevice) => void,
    updateDevice: (device: IDevice) => void,
    sendDeleteRequest: (device: IDevice) => void,
    deviceTypes: IPickerItem[],
    devices: IDevice[],
}

interface ISettings extends IDevicesTable {
    selectedDevice: IDevice,
    isDeviceDetailsOpen: boolean,
    onDetailsCloseHandler: () => void,
    onDeviceEditSubmitHandler: (device: IDevice) => void
    onDeviceEditCancelHandler: () => void,
    onDeviceDeleteHandler: (id: number) => void
}

interface INewDeviceForm {
    detectedDevices: IDevice[],
    onDetectedDeviceClick: (index: number) => void
    onAddNewDeviceButtonHandler: () => void,
    isAddNewDeviceButtonActive: boolean,
    onTypeChangeHandles: (value: string) => void,
    newDeviceType: string,
    deviceTypes: IPickerItem[],
    onTitleChange: (e: any) => void,
    title: string,
}

interface ISettingsPageState {
    selectedDeviceIndex: number,
    isDeviceDetailsOpen: boolean
}

interface IAddNewDevicePageState extends IDevice{
    dupa?: number
}

interface IAddNewDevicePageProps {
    addNewDevice: (device: IDevice) => void,
    fetchDetectedDevices: () => void
    deviceTypes: IPickerItem[],
    devices: IDevice[],
    detectedDevices: IDevice[],
}

interface IDevicesTable {
    devices: IDevice[],
    onDeviceClick: (index: number) => void
}

interface IDevicesTableItem {
    device: IDevice
    onClick: () => void
}