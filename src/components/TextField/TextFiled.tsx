import * as React from 'react';
import { TextField } from '@material-ui/core';

const TextFieldComponent = (props) => (
  <TextField
    fullWidth
    {...props}
  />);

export default TextFieldComponent;
