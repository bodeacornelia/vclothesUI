import * as React from 'react';

export interface IProps {
  compiler: string;
  framework: string;
}

export const App = (props: IProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;