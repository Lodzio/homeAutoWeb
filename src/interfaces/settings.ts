interface ISettingsPageProps {
    addNewDevice: (device: IDevice) => void,
    deviceTypes: IPickerItem[],
    devices: IDevice[],
}

interface ISettings extends INewDeviceForm, ISettingsDeviceList {
    isAddNewDeviceFormOpen: boolean,
    onAddNewDeviceFormOpenButtonHandler: () => void,
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
    isAddNewDeviceFormOpen: boolean
}

interface ISettingsDeviceList {
    devices: IDevice[],
}

interface ISettingsDeviceListItem {
    device: IDevice
}