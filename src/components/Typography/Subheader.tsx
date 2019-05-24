import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  value: string;
  className?: any;
}

export const Subheader = ({ value, ...props }: IProps) => (
  <Typography variant="h5" gutterBottom {...props}>
    {value}
  </Typography>
);
