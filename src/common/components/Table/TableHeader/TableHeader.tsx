import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './TableHeader.css'

const tableHeader = (props: ITableHeader) => {
    return(
        <TableHead>
        <TableRow className={'tableHeader'}>
            {props.labels.map((label, index) => 
                <TableCell className={'cell'} align={index !== 0 ? "right":"left"} key={label}>
                    {label}
                </TableCell>
            )}
        </TableRow>
        </TableHead>
)}

export default tableHeader;