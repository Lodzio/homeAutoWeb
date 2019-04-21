import * as React from 'react';
import Table from '../../../common/components/Table/Table'
import './devicesTable.css'

const devicesTable = (props: IDevicesTable) => {
    const columns = [
        {key: 'title', label: 'Title'},
        {key: 'value', label: 'Value'},
        {key: 'id', label: 'Idx'},
        {key: 'port', label: 'Port'},
        {key: 'type', label: 'Type'}]
    return <div className={'devicesTable'}>
        <Table elements={props.devices} columns={columns} onElementClick={props.onDeviceClick}/>
        </div>
}

export default devicesTable;