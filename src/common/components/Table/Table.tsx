import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import './Table.css'

const table = (props: ITable) => {
    const labels = props.columns.map(column => column.label)
    const keys = props.columns.map(column => column.key) 
    return(
        <Table>
            <TableHeader labels={labels}/>
            <TableBody elements={props.elements} keys={keys} onElementClick={props.onElementClick}/>
        </Table>
)}

export default table;