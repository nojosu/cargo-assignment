import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

import { getShipCountry } from '../utils/helpers';
import ShipName from './ShipName';
import ShipDetails from './ShipDetails';

const Ship = () => {
  const id = parseInt(useParams().id);
  const ship = useSelector(state => state.ships.find(ship => ship.id === id));

  if (!ship) return null;
  const shipCountry = getShipCountry(ship.owner);

  return (
    <Box sx={{ padding: 1 }}>
      <Grid container spacing={1}>
        <ShipName shipName={ship.name} shipCountry={shipCountry}/>
        <ShipDetails ship={ship} shipCountry={shipCountry}/>
      </Grid>
    </Box>
  );
}

export default Ship;