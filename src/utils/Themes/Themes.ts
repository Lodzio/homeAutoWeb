import { createMuiTheme } from '@material-ui/core/styles'

export const MainTheme = createMuiTheme({
    palette: { primary: {main: '#468902' }},
    overrides: {
      MuiInput: {
        underline: {
          '&:after': { 
            borderBottomColor: '#468902',
          },
          "&&&&:hover:before": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.42)"
          }
        },
        input: {
          color: '#aaa'
        }
      }
    },
    typography: {
        useNextVariants: true,
    }
  });
