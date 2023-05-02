import React from 'react'
import { Typography } from '@mui/material';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {initializeDevices, toggleRelay} from './deviceReducer'
import AddDevice from './AddDevice';
import Device from './Device';

const Devices = () => {
  const dispatch = useDispatch()
  

  const devices = useSelector(state => state.devices)

  useEffect(() => {
      dispatch(initializeDevices())
    }, [dispatch])

    


  return (
    <>
    <Typography variant='h2'> Laitteet: </Typography>
      {devices.map( device =>
        
        <Device
          key={device._id}
          device={device}
          handleSwitch={() =>
            dispatch(toggleRelay(device._id))
          }        
        />
      )}
      <AddDevice/>
    </>
  )
}

export default Devices