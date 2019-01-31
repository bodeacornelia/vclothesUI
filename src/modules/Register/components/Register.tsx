import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';
import {Header, TextField} from 'components';

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

  handleChange = (name: string) => (event: any) => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const { firstName, lastName, email, password, phone } = this.state;

    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone,
      role_id: 2
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
        <Header value="Create new account" className={classes.title} />
        <TextField
          id="firstName"
          label="First name"
          value={firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
          required
        />
        <TextField
          id="lastName"
          label="Last name"
          value={lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
          required
        />
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={this.handleChange('email')}
          margin="normal"
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={this.handleChange('password')}
          margin="normal"
          required
        />
        <TextField
          id="phone"
          label="Phone"
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
          REGISTER
        </MuiButton>
      </>
    );
  }
}

export default withStyles(styles)(RegisterComponent);