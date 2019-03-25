import * as React from 'react'
import ListItem from './devicesListItem/devicesListItem'
import {createChunks} from '../../../utils/ArrayUtils/ArrayTuils'
import Grid from '@material-ui/core/Grid'

const devicesList = (props: IDevicesList) => {

    const items = props.devices.map((item, index: number) => {
        return (
        <Grid xs={3} item={true} key={index}>
            <ListItem device={item}/>
        </Grid>)
    })

    const chunks = createChunks(items, 4);
    console.log(chunks)
    const list = chunks.map((chunk, index) => 
                <Grid container={true} key={index}>
                    {chunk}
                </Grid>)

    return(
        <div>
            {list}
        </div>
    )
}

export default devicesList;