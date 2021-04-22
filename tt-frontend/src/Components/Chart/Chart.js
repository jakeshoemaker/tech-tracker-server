import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const Chart = () => {
    const [company, setCompany] = useState("AAPL")
    const [chartData, setChartData] = useState({})
    const [dataLoaded, setDataLoaded] = useState(false)
    const options = {
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
    


    const loadChart = () => {
        let companyClosingData = [] // holds closing price
        let companyClosingDate = [] // holds timestamp
        axios
        .get(`https://www.quandl.com/api/v3/datasets/EOD/${company}.json?api_key=${process.env.REACT_APP_API_KEY}&collapse=annual&column_index=4&order=asc`)
        .then(res => {
            if (res.status === 200) {
                for (const dataArr of res.data.dataset.data) {
                    companyClosingData.push(dataArr[1])
                    companyClosingDate.push(dataArr[0])
                }
                setDataLoaded(true)
                setChartData({
                    labels: companyClosingDate,
                    datasets: [
                        {
                            label: `${company}'s Historical data`,
                            fontSize: 24,
                            data: companyClosingData,
                            backgroundColor: "#ffa39e",
                            borderWidth: 4

                        }
                    ]
                })
            } else {
                console.error("error")
                setDataLoaded(false)
                return []
            }
        }).catch(err => {
            console.log(err)
        })
    }

/*     const prepareData = async () => {
        var data = await getData()
        const clean_data = data.map(function(d) {
            return  {
                "date": d[0], 
                "closing": d[1]
            }
        })
        console.log(clean_data)
        return clean_data
    } */

    useEffect(() => {
        loadChart();
    }, [company])
    
    //const DUMMY_DATA = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
    return (
        <div className="chart">
            {dataLoaded ? (
                <Line 
                    data={chartData} 
                    options={options}
                /> ) : (
                <h1> could not load the data, please check your settings</h1>
            )}
        </div>
    )
}

export default Chart