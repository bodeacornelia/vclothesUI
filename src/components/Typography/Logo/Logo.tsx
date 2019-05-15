import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

interface IProps {
  classes: any;
}

const LogoComponent = ({ classes }: IProps) => (
  <Typography className={classes.logo}>
    Viorica's Secret
  </Typography>
);

const styles = (theme: any) => ({
  logo: {
    fontFamily: 'Alegreya SC',
    fontSize: '30px'
  },
});

export default withStyles(styles)(LogoComponent);
