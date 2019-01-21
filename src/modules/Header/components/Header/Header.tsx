import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Toolbar as MuiToolbar,
  AppBar as MuiAppBar
} from '@material-ui/core';
import { HEADER_HEIGHT } from 'constants/EnvironmentConstants';
import { Logo, Button } from 'components';
import Search from '../Search';

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  header: {
    gridArea: 'header',
    backgroundColor: 'white',
    color: 'black',
  },
  toolBar: {
    display: 'flex',
    minHeight: `${HEADER_HEIGHT}px`
  },
  actions: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

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
          <MuiToolbar>
            <div className={classes.grow}><Logo /> </div>
            <Search />
            <div className={classes.actions}>
              <Button color="inherit" value="Login" onClick={navigateToLoginPage} />
              <Button color="inherit" value="Register" onClick={navigateToRegisterPage} />
            </div>

          </MuiToolbar>
        </MuiAppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
