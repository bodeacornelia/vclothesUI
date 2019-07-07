import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import config from '../../../../../../config/environments/development';
import { FACEBOOK_LOGIN } from 'constants/ApiConstants';
import { FACEBOOK_LOGIN_BUTTON } from 'constants/AppStringConstants';

const LoginFacebookButton = ({ classes }) => (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
    >
      <a
        className={classes.link}
        href={`${config.BACKEND_URL}${FACEBOOK_LOGIN}`}>
        {FACEBOOK_LOGIN_BUTTON}</a>
    </Button>
);

const styles = (theme) => ({
  button: {
    fontSize: 17,
    backgroundColor: '#3b5998',
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
});

export default withStyles(styles)(LoginFacebookButton);