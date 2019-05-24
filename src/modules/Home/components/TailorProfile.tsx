import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { Subheader } from 'components/Typography/Subheader';
import { Header } from 'components/Typography/Header';
import { TAILOR_PROFILE_TITLE, TAILOR_PROFILE_DESCRIPTION } from 'constants/AppStringConstants'

interface IProps {
  classes?: any;
}

class TailorProfile extends React.Component<IProps> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.title}>
          <Header value={TAILOR_PROFILE_TITLE} />
        </div>
        <div className={classes.profileContainer}>
          <div className={classes.tailorDescription}>
            <Subheader
              value={TAILOR_PROFILE_DESCRIPTION} />
          </div>
          <div className={classes.tailorImage}></div>
        </div>
      </>
    );
  }
}

const styles = (theme) => ({
  profileContainer: {
    height: '400px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  tailorDescription: {
    maxWidth: '60%'
  },
  tailorImage: {
    backgroundImage: 'url("../../public/assets/img/tailorImage.jpg")',
    width: 400,
    height: 400,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
  },
});

export default withStyles(styles)(TailorProfile);