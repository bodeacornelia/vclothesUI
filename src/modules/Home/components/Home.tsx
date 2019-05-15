import * as React from 'react';
import { withStyles } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface IProps {
  classes?: any;
}

class Home extends React.Component<IProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.carouselContainer}>
        <Carousel dynamicHeight={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={4000} showStatus={false}>
          <div>
            <img src="../../public/assets/img/image1.jpg" height={600} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="../../public/assets/img/image2.jpg" height={600} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="../../public/assets/img/image3.jpg" height={600} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

const styles = (theme: any) => ({
  carouselContainer: {
    height: '600px'
  }
});

export default withStyles(styles)(Home);