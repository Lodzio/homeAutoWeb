interface ILayout {
    children: any,
}

interface INavigationItem {
    route: string,
    children: any,
}

interface IModal {
    open: boolean,
    onClose: () => void,
    children: any,
}

interface ITextField {
    label: string,
    onChange: (e: any) => void,
    className?: string
}