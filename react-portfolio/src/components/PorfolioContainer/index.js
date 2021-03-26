import React from 'react';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function PortfolioContainer(props) {
    return (
      <>
        <Grid container>{props.children}</Grid>
      </>
    );
  }