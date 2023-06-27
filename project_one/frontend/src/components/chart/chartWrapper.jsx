import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {

    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            outerHeight:'100%'
        },
        title: {
            display: false,
            text: '',
        },
    },
};

export function ChartWrapper(props) {
   
    if (!props.data.hourly) {
        return <></>
    }
    let preData = props.data;
    let labels = preData.hourly.time;

    let data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Температура',
                data: preData.hourly.temperature_2m,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Line options={options} height={'50'} data={data} />;
}
