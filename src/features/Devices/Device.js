import React from 'react'
import { Box, Typography, Switch } from '@mui/material'

const Device = ({device, handleSwitch}) => {
    
  return (
    <Box >
          <Typography>Nimi: {device.name}</Typography>
          <Typography>Lämptila: {device.temp}°C</Typography>
          <Typography>rele: {device.relay? 'päällä' : 'pois'}</Typography>
          <Switch
            checked={device.relay}
            onChange={handleSwitch}
          />
    </Box>
  )
}

export default Device