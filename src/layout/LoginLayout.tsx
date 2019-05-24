import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Subheader } from '../components/Typography/Subheader';

interface IProps {
  render: any;
  classes: any;
}

class LoginLayout extends React.Component<IProps> {
  render() {
    const { classes, render } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.content}>
          <Subheader value="Viorica's Secret" className={classes.logo} />
        </div>
        <div className={classes.formContainer}>
          <form className={classes.form}>
            {render}
          </form>
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  container: {
    height: '100%',
    display: 'flex',
  },
  content: {
    width: '60%',
    padding: '3em',
    backgroundImage: 'url(../../public/assets/img/tailor.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundColor: '#F6F6F6',
  },
  formContainer: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3em',
  },
  form: {
    minHeight: '60%',
    width: '80%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Alegreya SC',
  },
});

export default withStyles(styles)(LoginLayout);
