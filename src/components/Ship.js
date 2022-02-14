import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { getShipCountry } from '../utils/helpers'

const Ship = () => {
  const id = parseInt(useParams().id)
  const ship = useSelector(state => state.ships.find(ship => ship.id === id))

  if (!ship) return null

  return (
    <Box>
      <Typography variant="h4" component="div">{ship.name}</Typography>
      <Typography component="div" color="text.secondary">
        <div>Country of origin: {getShipCountry(ship.owner)}</div>
        <div>Built: {ship.built}</div>
        <div>Name: {ship.name}</div>
        <div>Length in meters: {ship.lengthMeters}</div>
        <div>Beam meters: {ship.beamMeters}</div>
        <div>TEU: {ship.maxTEU}</div>
        <div>Owner: {ship.owner}</div>
        <div>Gross tonnage: {ship.grossTonnage}</div>
      </Typography>
    </Box>
  )
}

export default Ship