import { useState, useEffect } from 'react'
import { Typography } from '@mui/material';
import devicesService from './services/devices'
import pricesService from './services/prices'
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Box } from '@mui/system';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sähkön pörssihinta',
    },
  },
};






const App = () => {
  const [devices, setDevices] = useState([])
  const [prices, setPrices] = useState([])

  useEffect(() => {
    devicesService.getAll().then(devices =>
      setDevices( devices )
    )

    pricesService.getAll().then(prices =>
      setPrices( prices )
    )

  }, [])

  const labels = prices.map(price => price.startDate);

  const data = {
    labels,
    datasets: [
      {
        label: 'snt/kwh',
        data: prices.map(price => price.price),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


  return (
    <div>
      <Typography variant='h1' align='center'> Tuukan koti </Typography>
      <Typography variant='h2'> Laitteet: </Typography>
      {devices.map( device =>
      <Box>
          <Typography>Nimi: {device.name}</Typography>
          <Typography>Lämptila: {device.temp}°C</Typography>
          <Typography>rele: {device.relay? 'päällä' : 'pois'}</Typography>
      </Box>
      )}
      <Line options={options} data={data} />
    </div>
  );
}

export default App;
