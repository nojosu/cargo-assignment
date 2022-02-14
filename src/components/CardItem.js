import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { getShipCountry } from '../utils/helpers';

const CardItem = (props) => {
  const ship = props.ship;
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/ship/${id}`);
  }

  return (
    <Grid item xs={12} md={4}>
      <Box>
        <CardActionArea onClick={() => handleClick(ship.id)}>
          <Card elevation={5}>
              <React.Fragment>
                <CardContent>
                  <Box sx={{ backgroundColor: 'lightblue', 
                    padding: 1, 
                    marginBottom: .5, 
                    borderRadius: 2 }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Ship #{ship.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {ship.name}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Country of origin: {getShipCountry(ship.owner)}
                    </Typography>
                    <Typography variant="body2">
                      TEU: {ship.maxTEU}
                    </Typography>
                  </Box>
                </CardContent>
              </React.Fragment>
          </Card>
        </CardActionArea>
      </Box>
    </Grid>
  );
}

export default CardItem