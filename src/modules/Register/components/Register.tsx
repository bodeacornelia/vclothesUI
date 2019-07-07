import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';
import { TextField } from 'components';
import { Header } from 'components/Typography/Header';
import { REGISTER_BTN, REGISTER_TITLE, FIRST_NAME, LAST_NAME, PHONE, PASSWORD, EMAIL } from 'constants/AppStringConstants'

interface IProps {
  classes?: any;
  registerUser(data: any): void;
};

class RegisterComponent extends React.Component<IProps> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const { firstName, lastName, email, password, phone } = this.state;

    const data = {
      name: `${firstName} ${lastName}`,
      email,
      password,
      phone
    };

    this.props.registerUser(data);
  }

  isFormCompleted = () => {
    const { firstName, lastName, email, password, phone } = this.state;
    return firstName && lastName && email && password && phone;
  }

  render() {
    const { classes } = this.props;
    const { firstName, lastName, email, password, phone } = this.state;

    return (
      <>
        <Header value={REGISTER_TITLE} className={classes.title} />
        <TextField
          id="firstName"
          label={FIRST_NAME}
          value={firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
          required
        />
        <TextField
          id="lastName"
          label={LAST_NAME}
          value={lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
          required
        />
        <TextField
          id="email"
          label={EMAIL}
          value={email}
          onChange={this.handleChange('email')}
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
        <TextField
          id="phone"
          label={PHONE}
          value={phone}
          onChange={this.handleChange('phone')}
          margin="normal"
          required
        />
        <MuiButton
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleSubmit}
          disabled={!this.isFormCompleted()}
        >
          {REGISTER_BTN}
        </MuiButton>
      </>
    );
  }
}

const styles = (theme) => ({
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

export default withStyles(styles)(RegisterComponent);