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