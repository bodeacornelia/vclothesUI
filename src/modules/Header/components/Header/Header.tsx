import * as React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  header: {
    height: '50px',
  },
  root: {
    height: 'inherit',
    backgroundColor: 'black',
    color: 'pink',
    display: 'flex',
    justifyContent: 'center',
  },
});

interface IProps {
  classes: any;
}

class Header extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <AppBar className={classes.root}>
          <Typography variant="h6" color="inherit">
            Viorica's secret
            </Typography>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
