import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ShipDetails = (props) => {
  const ship = props.ship;
  const shipCountry = props.shipCountry;

  return (
    <React.Fragment>
      <Grid item xs={6}>
        <Box sx={{ textAlign: 'center', marginTop: 3 }}>
          <Typography variant="h5">General information</Typography>
          <Typography color="text.secondary">
            Country of origin: {shipCountry}<br/>
            Built: {ship.built}<br/>
            Name: {ship.name}<br/>
            Owner: {ship.owner}<br/>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ textAlign: 'center', marginTop: 3 }}>
          <Typography variant="h5">Technical information</Typography>
          <Typography color="text.secondary">
            Length in meters: {ship.lengthMeters}<br/>
            Beam meters: {ship.beamMeters}<br/>
            TEU: {ship.maxTEU}<br/>
            Gross tonnage: {ship.grossTonnage}<br/>
          </Typography>
        </Box>
      </Grid>
    </React.Fragment>
  );
}

export default ShipDetails;