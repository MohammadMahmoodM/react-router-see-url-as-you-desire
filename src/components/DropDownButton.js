import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link  } from 'react-router-dom';

// ControlledOpenSelect
export default function SplitButton() {

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        {/*#contained-buttons*/}
        <Link to="/"><Button variant="contained" color="primary" alignItems="center" >Home</Button></Link>
        <Link to="/LadiesProducts"><Button variant="contained" color="primary" Link="LadiesProducts" alignItems="center" >Ladies Shoes</Button></Link>
        <Link to="/MensProducts"><Button variant="contained" color="primary" href="MensProducts" alignItems="center" >Mens Shoes</Button></Link>
        <Link to="/KidsProducts"><Button variant="contained" color="primary" href="KidsProducts" alignItems="center" >Kids Shoes</Button></Link>
        <Link to="/about"><Button variant="contained" color="primary" Link="about" alignItems="center" >About Me</Button></Link>
      </Grid>
    </Grid>
  );
}