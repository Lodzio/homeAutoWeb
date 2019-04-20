import * as React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './TableBody.css'

const rowConstructor = (keys: string[], hover: boolean = false) => {
    return (props: {element: any, onClick?: () => void}) => 
        <TableRow onClick={props.onClick} hover={hover}>
            {keys.map((key, index) => 
                index !== 0 ? 
                <TableCell align="right" key={key}>{String(props.element[key])}</TableCell>:
                <TableCell component="th" scope="row" key={key}>{String(props.element[key])}</TableCell>
            )}
        </TableRow>
}

const tableBody = (props: ITableBody) => {
    const TableItem = props.onElementClick? 
        rowConstructor(props.keys, true): 
        rowConstructor(props.keys);
    const onClickHandler = (index: number) => () => props.onElementClick && props.onElementClick(index);
    return(
            <TableBody>
            {props.elements.map((element, index) => (
                <TableItem key={index} element={element} onClick={onClickHandler(index)}/>
            ))}
            </TableBody>
)}

export default tableBody;