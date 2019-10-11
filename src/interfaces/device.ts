interface IDevice {
	title: string;
	type: string;
	value: number;
	id: string | number;
	logs: ILog[];
	interface: null | 'Shelly';
}

interface ILog {
	timestamp: number;
	value: number;
	deviceId: string;
}

interface IDevicesList {
	devices: IDevice[];
	onDeviceClickHandler: (index: number) => void;
}

interface IDevicesListItem {
	device: IDevice;
	onClickHandler?: () => void;
}

interface IDeviceDetailsProps {
	device: IDevice | null;
	deviceTypes: IPickerItem[];
	onSubmitHandler: (device: IDevice) => void;
	onCancelHandler: () => void;
	onDeleteHandler: (id: number | string) => void;
	fetchDeviceLogsById: (id: any) => void;
}

interface IDeviceDetailsState {
	title: string;
}
