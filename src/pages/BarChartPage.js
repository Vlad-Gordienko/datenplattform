import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ChartPage.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChartPage() {
    const data = {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                label: '0-20 Jahre',
                backgroundColor: '#3e95cd',
                data: [445, 451, 454, 454, 455, 458, 449, 457]
            },
            {
                label: '21-64 Jahre',
                backgroundColor: '#8e5ea2',
                data: [1337, 1333, 1330, 1334, 1333, 1314, 1303, 1285]
            },
            {
                label: '65+ Jahre',
                backgroundColor: '#3cba9f',
                data: [265, 287, 307, 331, 352, 388, 420, 454]
            }
        ]
    };

    return (
        <div className="chart-page">
            <h2>Balkendiagramm nach Altersgruppen</h2>
            <div className="chart-container">
                <Bar data={data} />
            </div>
        </div>
    );
}

export default BarChartPage;
