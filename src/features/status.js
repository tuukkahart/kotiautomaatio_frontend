import { Typography, Box } from '@mui/material'
import React from 'react'

const Status = () => {
  return (
    <Box>
        <Typography variant='h3'>Järjestelmän tila</Typography>
        <Typography>Sisäänkirjautunut: username</Typography>
        <Typography>Mqtt-verkko: yhdistetty</Typography>
        <Typography>Tietokanta: yhdistetty</Typography>
    </Box>
  )
}

export default Status