interface ISettingsPageProps {
    updateDevice: (device: IDevice) => void,
    sendDeleteRequest: (device: IDevice) => void,
    fetchDevices: () => void,
    deviceTypes: IPickerItem[],
    devices: IDevice[],
}

interface ISettings extends IDevicesTable {
    onAddNewDeviceFormOpen: () => void,
    selectedDevice: IDevice,
    isDeviceDetailsOpen: boolean,
    onDetailsCloseHandler: () => void,
    onDeviceEditSubmitHandler: (device: IDevice) => void
    onDeviceEditCancelHandler: () => void,
    onDeviceDeleteHandler: (id: string) => void
}

interface INewDeviceForm {
    onInterfaceChangeHandles: any,
    onIdChange: any,
    id: string,
    interface: string,
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
    isDeviceDetailsOpen: boolean,
    isAddNewDeviceModalOpen: boolean,
}

interface IAddNewDevicePageState {
    device: IDevice,
}

interface IAddNewDevicePageProps {
    addNewDevice: (device: IDevice) => void,
    fetchDetectedDevices: () => void
    deviceTypes: IPickerItem[],
    devices: IDevice[],
    detectedDevices: IDevice[],
    onCloseComponent: () => void
}

interface IDevicesTable {
    devices: IDevice[],
    onDeviceClick: (index: number) => void
}

interface IDevicesTableItem {
    device: IDevice
    onClick: () => void
}