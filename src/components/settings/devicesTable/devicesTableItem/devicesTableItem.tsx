import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './devicesTableItem.css'

const devicesTableItem = (props: IDevicesTableItem) => {
    const {device} = props;
    console.log(device)
    return(
        <TableRow hover={true} onClick={props.onClick}>
            <TableCell component="th" scope="row">{device.title}</TableCell>
            <TableCell align="right">{String(device.value)}</TableCell>
            <TableCell align="right">{device.id}</TableCell>
            <TableCell align="right">{device.port}</TableCell>
            <TableCell align="right">{device.type}</TableCell>
        </TableRow>
)}

export default devicesTableItem;