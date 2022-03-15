import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    textDecoration: 'blink',
    color: '#757575',
    fontFamily: 'serif',
    letterSpacing: '1px',
    fontSize: '23px',
    '&:hover': {
      color: 'blue',
    }
  },
  container_layout: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    width: 'auto',
    height: '60px',
    color: '#757575',
    justifyContent: 'space-evenly'
  },
});

export default useStyles;