import * as React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { HEADER_HEIGHT } from '../../../../constants/EnvironmentConstants';

const styles = (theme: any) => ({
  header: {
    gridArea: 'header',
    backgroundColor: 'black',
    color: 'pink',

  },
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: `${HEADER_HEIGHT}px`
  }
});

interface IProps {
  classes: any;
}

class Header extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.header}>
        <div className={classes.toolBar}>
          <Typography variant="h6" color="inherit">
            Viorica's secret
            </Typography>
        </div>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
