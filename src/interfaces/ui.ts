interface IPicker{
    onChange: (value: string) => void,
    value: string,
    items: IPickerItem[],
    label: string,
    help?: string,
}

interface IPickerItem{
    value: string,
    label: string
}

interface IModal {
    open: boolean,
    onClose: () => void,
    children: any,
}

interface ITextField {
    label: string,
    onChange?: (e: any) => void,
    className?: string,
    defaultValue?: string,
    disabled?: boolean
}

interface ITable {
    columns: Array<{key: string , label: string}>,
    elements: any[],
    onElementClick?: (index: number) => void
}

interface ITableHeader {
    labels: string[]
}

interface ITableBody {
    keys: string[];
    elements: any[],
    onElementClick?: (index: number) => void
}

interface ITableBodyItem {
    keys: string[];
    onElementClick?: () => void
}

interface ISubmitDialog {
    label: string
}
interface INotificationState{
    title: 'Error'|'Message',
    message: string,
    animation: boolean
}