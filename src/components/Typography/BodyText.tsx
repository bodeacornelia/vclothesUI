import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  value: string;
  className?: any;
}

export const BodyText = ({ value, ...props }: IProps) => (
  <Typography variant="body1" gutterBottom {...props}>
    {value}
  </Typography>
);
