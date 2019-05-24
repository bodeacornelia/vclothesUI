import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { Header } from 'components/Typography/Header';
import { RECENT_PRODUCTS_TITLE } from 'constants/AppStringConstants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface IProps {
  classes?: any;
}

class RecentProducts extends React.Component<IProps> {

  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.title}>
          <Header value={RECENT_PRODUCTS_TITLE} />
        </div>
        <div className={classes.galleryContainer}>
          <Slider {...this.settings}>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

const styles = (theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
  },
  galleryContainer: {
    height: '500px',
    width: 'inherit',
    maxWidth: '1333px'
  }
})

export default withStyles(styles)(RecentProducts);