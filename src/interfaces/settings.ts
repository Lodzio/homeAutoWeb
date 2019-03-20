interface ISettingsPageProps {
    addNewDevice: (device: IDevice) => void
}

interface ISettings {
    onAddNewDeviceButtonHandler: () => void,
    isAddNewDeviceButtonActive: boolean
}

interface ISettingsPageState {
    newDevice: IDevice,
}