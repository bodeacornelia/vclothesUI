import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { HEADER_HEIGHT } from '../constants/EnvironmentConstants';
import HeaderContainer from '../modules/Header/containers/HeaderContainer';

interface IProps {
  classes: any;
  render: React.ReactNode;
}

class LandingLayout extends React.Component<IProps> {

  render() {
    const { classes, render } = this.props;
    return (
      <div className={classes.container}>
        <HeaderContainer />
        <div className={classes.page}>
          {render}
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  container: {
    height: '100vh',
    display: 'grid',
    gridTemplateAreas: '"header" "section"',
  },
  page: {
    gridArea: 'section',
    minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
  }
});

export default withStyles(styles)(LandingLayout);