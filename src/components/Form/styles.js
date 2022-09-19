import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      background: 'linear-gradient(45deg,#d1c4e9 10%, #bbdefb 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',

    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'black',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // backgroundColor: 'white',
    color: '#b2dfdb',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    // color: 'white',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: 'green'
  },
}));