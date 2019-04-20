interface ISettingsPageProps {
    addNewDevice: (device: IDevice) => void,
    updateDevice: (device: IDevice, index: number) => void,
    deviceTypes: IPickerItem[],
    devices: IDevice[],
}

interface ISettings extends INewDeviceForm, IDevicesTable {
    isAddNewDeviceFormOpen: boolean,
    onAddNewDeviceFormOpenButtonHandler: () => void,
    selectedDevice: IDevice,
    isDeviceDetailsOpen: boolean,
    onDetailsCloseHandler: () => void,
    onDeviceEditSubmitHandler: (device: IDevice) => void
    onDeviceEditCancelHandler: () => void
}

interface INewDeviceForm {
    onAddNewDeviceButtonHandler: () => void,
    isAddNewDeviceButtonActive: boolean,
    onTypeChangeHandles: (value: string) => void,
    newDeviceType: string,
    deviceTypes: IPickerItem[],
    onTitleChange: (e: any) => void,
}

interface ISettingsPageState {
    newDevice: IDevice,
    isAddNewDeviceFormOpen: boolean,
    selectedDeviceIndex: number,
    isDeviceDetailsOpen: boolean
}

interface IDevicesTable {
    devices: IDevice[],
    onDeviceClick: (index: number) => void
}

interface IDevicesTableItem {
    device: IDevice
    onClick: () => void
}