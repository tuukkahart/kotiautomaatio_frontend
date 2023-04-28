import React from 'react'
import { Typography, Box, Switch } from '@mui/material';
import { useState, useEffect } from 'react'
import devicesService from '../services/devices'

const Devices = () => {
    const [devices, setDevices] = useState([])
    const [checked, setChecked] = useState(true)

    useEffect(() => {
        devicesService.getAll().then(devices =>
          setDevices( devices )
        )
    
    
      }, [])


      const handleChange = (event) => {
        setChecked(event.target.checked);
      };

  return (
    <>
    <Typography variant='h2'> Laitteet: </Typography>
      {devices.map( device =>
      <Box >
          <Typography>Nimi: {device.name}</Typography>
          <Typography>Lämptila: {device.temp}°C</Typography>
          <Typography>rele: {device.relay? 'päällä' : 'pois'}</Typography>
          <Switch
            checked={checked}
            onChange={handleChange}
          />
      </Box>
      )}
    </>
  )
}

export default Devices