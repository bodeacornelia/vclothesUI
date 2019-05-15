import * as React from 'react';
import Home from 'modules/Home/components/Home';
import LandingLayout from '../layout/LandingLayout';

const HomePage = (props: any) => (
  <LandingLayout render={<Home {...props} />} />
);

export default HomePage;