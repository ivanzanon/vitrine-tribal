import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
    main: '#65192A',
      //main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff', 
      main: 'linear-gradient(0deg, #F38A4E 20%, #65192A 80%)'
    },
  },
});

export default theme;