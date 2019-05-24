import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { CarouselComponent } from 'components/Carousel/Carousel';
import TailorProfile from '../TailorProfile';
import RecentProducts from '../RecentProducts';
import {
  CAROUSEL_LEGEND_1,
  CAROUSEL_LEGEND_2,
} from 'constants/AppStringConstants';

const carouselImages = [
  {
    url: '../../public/assets/img/image2.jpg',
    legend: CAROUSEL_LEGEND_1
  },
  {
    url: '../../public/assets/img/image3.jpg',
    legend: CAROUSEL_LEGEND_2
  }
];

interface IProps {
  classes?: any;
}

class Home extends React.Component<IProps> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.carouselContainer}>
          <CarouselComponent carouselImages={carouselImages} />
        </div>
        <div className={classes.homeContent}>
          <TailorProfile />
          <RecentProducts />
        </div>
      </>
    );
  }
}

const styles = (theme) => ({
  carouselContainer: {
    height: '750px',
    marginTop: 30,
  },
  homeContent: {
    width: '70%',
    margin: 'auto'
  }
});

export default withStyles(styles)(Home);