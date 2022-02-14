import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { getShipCountry } from '../utils/helpers';

const CardItem = (props) => {
  let ship = props.ship;
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/ship/${id}`);
  }

  return (
    <Grid item xs={6} md={4}>
      <Card elevation={5} onClick={() => handleClick(ship.id)}>
        <React.Fragment>
          <CardContent>
            <Box sx={{ backgroundColor: 'lightblue', padding: 1, marginBottom: .5, borderRadius: 2 }}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Ship #{ship.id}
              </Typography>
              <Typography variant="h5" component="div">
                {ship.name}
              </Typography>
            </Box>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Country of origin: {getShipCountry(ship.owner)}
            </Typography>
            <Typography variant="body2">
              TEU: {ship.maxTEU}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Grid>
  );
}

export default CardItem