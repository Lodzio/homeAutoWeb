import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DevicesTableItem from './devicesTableItem/devicesTableItem'
import './devicesTable.css'

const devicesTable = (props: IDevicesTable) => {
    return(
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Value</TableCell>
                <TableCell align="right">Idx</TableCell>
                <TableCell align="right">Port</TableCell>
                <TableCell align="right">Type</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.devices.map((device, index) => (
                <DevicesTableItem device={device} key={device.id} onClick={() => props.onDeviceClick(index)}/>
            ))}
            </TableBody>
        </Table>
)}

export default devicesTable;