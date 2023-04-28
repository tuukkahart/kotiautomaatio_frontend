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
import { useState, useEffect } from 'react'

import pricesService from '../services/prices'
import { Line } from 'react-chartjs-2';

import React from 'react'

const PriceChart = () => {

    const [prices, setPrices] = useState([])



    useEffect(() => {
        
        pricesService.getAll().then(prices =>
            setPrices( prices )
        )
        
        }, [])
          
        ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
        );
        
        const options = {
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
        const labels = prices.map(price => new Date (price.startDate).toLocaleTimeString());
        
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
    <Line options={options} data={data} />
  )
}

export default PriceChart


