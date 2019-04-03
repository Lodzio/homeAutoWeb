import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import { MainTheme } from '../../../utils/Themes/Themes';
import { MuiThemeProvider} from '@material-ui/core/styles'
import './TextField.css'

const textField = (props: ITextField) => {return(
    <MuiThemeProvider theme={MainTheme}>
        <TextField 
            label={props.label} 
            onChange={props.onChange}
            className={props.className}/>
    </MuiThemeProvider>
)}

export default textField;