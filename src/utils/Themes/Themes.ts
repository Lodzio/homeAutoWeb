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
            borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
          }
        },
        // root: {
        //   color: '#A7B09D'
        // }
      }
    },
    typography: {
        useNextVariants: true,
    }
  });
