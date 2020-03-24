import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function ContinuousSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);

  const handleChange = (event, newValue) => {
    props.changeSpeed(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Animation Speed
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider min={1} defaultValue={props.defaultValue} value={value} onChange={handleChange} aria-labelledby="continuous-slider" valueLabelDisplay="on" />
        </Grid>
      </Grid>
    </div>
  );
}