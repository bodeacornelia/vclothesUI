import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  value: string;
  className?: any;
}

export const Header = ({ value, ...props }: IProps) => (
  <Typography variant="h3" gutterBottom {...props}>
    {value}
  </Typography>
);