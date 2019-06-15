import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'dark'
  },
  overrides: {
    MuiInput: {
      root: {
        fontSize: '3rem'
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: '2rem'
      }
    }
  }
});
