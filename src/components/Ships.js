import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import CardItem from './CardItem';

const Ships = () => {
  const ships = useSelector(state => state.ships);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {ships.map(ship =>
          <CardItem key={ship.id} ship={ship}/>
        )}
      </Grid>
    </Box>
  );
}

export default Ships;