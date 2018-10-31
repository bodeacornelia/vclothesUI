import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../modules/Header/components/Header';
import { Paper } from '@material-ui/core';

const styles = (theme: any) => ({
  container: {
    height: '100%',
  },
  paper: {
    height: 'calc(100vh - 50px)',
  },
});

interface IProps {
  render: any;
  classes: any;
}

class LoginLayout extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <div>
          <Paper className={classes.paper}>
            {this.props.render}
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginLayout);
