import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Toolbar as MuiToolbar,
  AppBar as MuiAppBar
} from '@material-ui/core';
import { HEADER_HEIGHT } from 'constants/EnvironmentConstants';
import { Logo, Button } from 'components';
import { LOGIN_BTN, REGISTER_BTN } from 'constants/AppStringConstants'

interface IProps {
  classes?: any;
  navigateToLoginPage(): void;
  navigateToRegisterPage(): void;
}

class Header extends React.Component<IProps> {
  render() {
    const { classes, navigateToLoginPage, navigateToRegisterPage } = this.props;

    return (
      <div className={classes.root}>
        <MuiAppBar position="static" className={classes.header}>
          <MuiToolbar className={classes.toolBar}>
            <div className={classes.actions}>
              <Button color="inherit" value={LOGIN_BTN} onClick={navigateToLoginPage} />
              <Button color="inherit" value={REGISTER_BTN} onClick={navigateToRegisterPage} />
            </div>
            <div className={classes.logo}><Logo /> </div>
          </MuiToolbar>
        </MuiAppBar>
      </div>
    );
  }
}

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    gridArea: 'header',
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 'none'
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'unset',
    minHeight: `${HEADER_HEIGHT}px`
  },
  actions: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

export default withStyles(styles)(Header);
