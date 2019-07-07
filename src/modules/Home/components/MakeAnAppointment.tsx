import * as React from 'react';
import { withStyles } from '@material-ui/core';

interface IProps {
  classes?: any;
}

class MakeAnAppointment extends React.Component<IProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appointmentContainer}>
        <div className={classes.center}>haha</div>
      </div>
    );
  }
}

const styles = (theme) => ({
  appointmentContainer: {
    height: '240px',
    display: 'flex',
    backgroundColor: '#ff980075'
  },
  center: {
    width: '70%',
    margin: 'auto'
  }
});

export default withStyles(styles)(MakeAnAppointment);