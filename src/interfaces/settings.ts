interface ISettingsPageProps {
    addNewDevice: (device: IDevice) => void,
    deviceTypes: IPickerItem[],
}

interface ISettings extends INewDeviceForm {
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