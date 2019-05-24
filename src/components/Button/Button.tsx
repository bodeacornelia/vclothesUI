import * as React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

interface IProps {
  classes: any;
  value: string;
  variant?: any;
  color?: any;
  onClick(): void;
}

const ButtonComponent = ({ classes, value, variant, color = "primary", onClick }: IProps) => (
  <Button
    variant={variant && variant}
    className={classes.button}
    color={color}
    onClick={onClick}
  >
    {value}
  </Button>
);

export default withStyles(styles)(ButtonComponent);