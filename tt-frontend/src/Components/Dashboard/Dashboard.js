import React, { useState } from 'react'
import { Button, Input}from 'react-bootstrap'
import axios from 'axios'
import Chart from '../Chart/Chart'
import './Dashboard.css'


const Dashboard = () => {
    const [tempCompany, setTempCompany] = useState()
    const [companyData, setCompanyData] = useState()
    
    const getChart = () => {
        let companyClosingData = [] // holds closing price
        let companyClosingDate = [] // holds timestamp
        axios
        .get(`https://www.quandl.com/api/v3/datasets/EOD/${tempCompany}.json?api_key=${process.env.REACT_APP_API_KEY}&collapse=annual&column_index=4&order=asc`)
        .then(res => {
            if (res.status === 200) {
                for (const dataArr of res.data.dataset.data) {
                    companyClosingData.push(dataArr[1])
                    companyClosingDate.push(dataArr[0])
                }
                setCompanyData({
                    labels: companyClosingDate,
                    datasets: [
                        {
                            label: `${tempCompany}'s Stock Price $`,
                            fontSize: 28,
                            data: companyClosingData,
                            backgroundColor: "#ffa39e",
                            borderWidth: 4

                        }
                    ]
                })
            } else {
                console.error("error")
                return []
            }
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div className="dashboard">
            <div className="container-md">
                <h2> Historical Data View</h2>
            </div>
            <div className="container">
                <div className="row" id="data-search">
                    <div className="col-sm">
                        <label>Stock Symbol</label>
                        <input type="text" id="company-ticker" className="form-control" onChange={(e) => {setTempCompany(e.target.value)}} />
                    </div>
                    <div className="col-sm" id="get-data">
                        <Button 
                        variant="dark"
                        onClick={ () => {
                            getChart()
                        }}
                    >Load Data</Button>
                    </div>
                </div>
                <Chart companyData={companyData} />
            </div>
            
        </div>
    )

}
export default Dashboard