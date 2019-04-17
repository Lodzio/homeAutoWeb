import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DevicesListItem from './devicesListItem/devicesListItem'
import './devicesList.css'

const devicesList = (props: ISettingsDeviceList) => {
    return(
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Idx</TableCell>
                <TableCell align="right">Port</TableCell>
                <TableCell align="right">Type</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.devices.map(device => (
                <DevicesListItem device={device} key={device.id}/>
            ))}
            </TableBody>
        </Table>
)}

export default devicesList;