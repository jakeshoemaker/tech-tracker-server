import React from 'react'
import { Line } from 'react-chartjs-2'
import './Chart.css'

const Chart = (props) => {
    const options = {
        type: 'line',
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            padding: {
                top: 5,
                left: 15,
                right: 15,
                bottom: 15
            }
        },
        legend: {
            labels: {
            fontColor: 'black',
            fontSize: 24
            }  
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 18,
                    fontColor: 'black'
                }
            }],
            xAxes: [{
            ticks: {
                fontSize: 18,
                fontColor: 'black'

            }
            }]
        }
    }

    
    return (
        <div className="chart-container">
            <Line 
                data={props.companyData} 
                options={options}
            /> 
        </div>
    )
}

export default Chart