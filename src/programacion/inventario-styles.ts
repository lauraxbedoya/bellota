import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    alignItems: 'center',
    padding: '2%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    width: 'auto',
    padding: '3%,'
  },
  total_cost: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  add_new_product: {
    fontSize: '20px',
    alignSelf: 'center',
    margin: '17px',
  },
});

export default useStyles;