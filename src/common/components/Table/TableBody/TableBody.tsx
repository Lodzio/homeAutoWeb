import * as React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { MainTheme } from '../../../../utils/Themes/Themes';
import { MuiThemeProvider} from '@material-ui/core/styles'
import './TableBody.css'

const rowConstructor = (keys: string[], hover: boolean = false) => {
    return (props: {element: any, onClick?: () => void}) => 
    <MuiThemeProvider theme={MainTheme}>
        <TableRow onClick={props.onClick} hover={hover} classes={{hover: 'hover'}}>
            {keys.map((key, index) => 
                index !== 0 ? 
                <TableCell classes={{root: 'cell'}} align="right" key={key}>{String(props.element[key])}</TableCell>:
                <TableCell classes={{root: 'cell'}} component="th" scope="row" key={key}>{String(props.element[key])}</TableCell>
            )}
        </TableRow>
    </MuiThemeProvider>
}

const tableBody = (props: ITableBody) => {
    const TableItem = props.onElementClick? 
        rowConstructor(props.keys, true): 
        rowConstructor(props.keys);
    const onClickHandler = (index: number) => () => props.onElementClick && props.onElementClick(index);
    return(
            <TableBody className={'tableBody'}>
            {props.elements.map((element, index) => (
                <TableItem key={index} element={element} onClick={onClickHandler(index)}/>
            ))}
            </TableBody>
)}

export default tableBody;