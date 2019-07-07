import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  value: string;
  className?: any;
}

export const Title = ({ value, ...props }: IProps) => (
  <Typography variant="h4" gutterBottom {...props}>
    {value}
  </Typography>
);
