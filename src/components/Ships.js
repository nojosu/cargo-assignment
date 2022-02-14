import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import CardItem from './CardItem'

const Ships = () => {
  const ships = useSelector(state => state.ships)

  const gridStyle = {
    padding: 30,
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} style={gridStyle}>
        {ships.map(ship =>
          <CardItem key={ship.id} ship={ship}/>
        )}
      </Grid>
    </Box>
  )
}

export default Ships