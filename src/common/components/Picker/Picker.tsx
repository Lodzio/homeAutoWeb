import * as React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import { MainTheme } from '../../../utils/Themes/Themes';
import { MuiThemeProvider} from '@material-ui/core/styles'

const picker = (props: IPicker) => {
    const items = props.items.map((item) => {
        return <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
    })
    return (
      <MuiThemeProvider theme={MainTheme}>
        <FormControl>
          <InputLabel htmlFor="age-simple">
            {props.label}
          </InputLabel>
          <Select
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}
            input={<Input name="age" id="age-label-placeholder" />}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {items}
          </Select>
          {props.help && <FormHelperText>{props.help}</FormHelperText>}
        </FormControl>
      </MuiThemeProvider>
    )
}

export default picker;