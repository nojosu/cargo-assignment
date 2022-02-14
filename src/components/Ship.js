import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

import { getShipCountry, getCountryImage } from '../utils/helpers';

const Ship = () => {
  const id = parseInt(useParams().id);
  const ship = useSelector(state => state.ships.find(ship => ship.id === id));

  if (!ship) return null;
  const shipCountry = getShipCountry(ship.owner);

  return (
    <Box sx={{ padding: 1 }}>
      <Grid>
        <Grid item xs={12} sx={{ margin: 1, height: 140 }}>
          <Box sx={{ backgroundImage: `url(${getCountryImage(shipCountry)})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            height: '140',
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
              <Typography variant="h1">{ship.name}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ margin: 2 }}>
          <Typography variant="h5">General information</Typography>
          <Typography color="text.secondary">
            <div>Country of origin: {shipCountry}</div>
            <div>Built: {ship.built}</div>
            <div>Name: {ship.name}</div>
            <div>Owner: {ship.owner}</div>
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ margin: 2 }}>
          <Typography variant="h5">Technical information</Typography>
          <Typography color="text.secondary">
            <div>Length in meters: {ship.lengthMeters}</div>
            <div>Beam meters: {ship.beamMeters}</div>
            <div>TEU: {ship.maxTEU}</div>
            <div>Gross tonnage: {ship.grossTonnage}</div>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Ship;