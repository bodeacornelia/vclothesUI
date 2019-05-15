import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { TextField, Link, Header } from 'components';
import { LOGIN_BTN, LOGIN_TITLE, EMAIL, PASSWORD, FORGOT_PASSWORD} from 'constants/AppStringConstants';

interface IProps {
  classes?: any;
  login(data: any): void;
}

class Login extends React.Component<IProps> {
  state = {
    username: '',
    password: '',
  };

  handleChange = (name: string) => (event: any) => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const { username, password } = this.state;
    const data = {
      username,
      password,
    };

    this.props.login(data);
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
      <>
        <Header value={LOGIN_TITLE} className={classes.title} />
        <TextField
          id="email"
          label={EMAIL}
          type="email"
          value={username}
          onChange={this.handleChange('username')}
          margin="normal"
          required
        />
        <TextField
          id="password"
          label={PASSWORD}
          type="password"
          value={password}
          onChange={this.handleChange('password')}
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleSubmit}
        >
          {LOGIN_BTN}
        </Button>
        <Link path="/" value={FORGOT_PASSWORD} />
      </>

    );
  }
}

const styles = (theme: any) => ({
  title: {
    color: '	#5B7265',
    marginBottom: '50px',
  },
  button: {
    marginTop: '3em',
    marginBottom: '2em',
    width: '182px',
    fontSize: '17px',
    backgroundColor: '#2597d7',
  },
});

export default withStyles(styles)(Login);
