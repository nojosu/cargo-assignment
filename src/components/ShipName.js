import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { getCountryImage } from '../utils/helpers';

const ShipName = (props) => {
  const shipCountry = props.shipCountry;
  const shipName = props.shipName;

  return (
    <Grid item xs={12} >
      <Box sx={{ backgroundColor: 'lightblue',
        backgroundImage: `url(${getCountryImage(shipCountry)})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        textAlign: 'center' }}
      >
        <Box
          sx={{
            bottom: 0,
            left: 0,
            bgcolor: 'rgba(0, 0, 0, 0.30)',
            color: 'white',
            padding: '10px',
          }}>
          <Typography variant="h2">{shipName}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default ShipName;