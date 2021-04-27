import React, { useState } from 'react'
import { Button, Dropdown }from 'react-bootstrap'
import axios from 'axios'
import Chart from '../Chart/Chart'
import './Dashboard.css'


const Dashboard = () => {
    const [tempCompany, setTempCompany] = useState()
    const [companyData, setCompanyData] = useState()
    const [predictionData, setPredictionData] = useState()
    const [hasPrediction, setHasPrediction] = useState(false)
    
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
                    options: {},
                    datasets: [
                        {
                            label: `${tempCompany}'s Stock Price $`,
                            fontSize: 28,
                            data: companyClosingData,
                            backgroundColor: '#58595b',
                            borderColor: '#58595b'
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



    const getPrediction = () => {
        axios
        .get('http://localhost:8080/api/market/sp500/prediction/1wk')
        .then(res => {
            // setting the state to prediciton data 
            console.log(res)
            setPredictionData({
                "prev_close": res.data.previous_close,
                "prediction": res.data.prediction,
                "market": res.data.market,
                "advice": res.data.advice
            })
            setHasPrediction(true)
        }).catch(err => {
            console.log(err)
        })
    }



    return (
         <div id="dashboard-container">
            <div className="container-fluid" >
                <div className="row" id="dashboard-titles">
                     <div className="col-sm">
                        <h2> Historical Data View</h2>
                     </div>
                     <div className="col-sm" id="prediction-title">
                         <h2> AI Prediction</h2>
                     </div>
                </div>
            
            
                <div className="row justify-content-start" id="data-search">
                    <div className="col-1">
                        <label>Stock Symbol</label>
                        <input type="text"
                               id="company-ticker"
                               className="form-control"
                               onChange={(e) => {setTempCompany(e.target.value)}}
                               onSubmit={() => {getChart()}}
                               style={{
                                   width: "150px"
                               }} />
                    </div>
                    <div className="col-sm" id="get-data">
                        <Button 
                        variant="dark"
                        onClick={ () => {
                            getChart()
                        }}
                        >Load Data</Button>
                    </div>
                    <div className="col-sm" id="market-picker">
                        <label> Choose Market </label>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                            Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {getPrediction()}}>SP500</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">NASDAQ</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">CRYPTO</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="row" id="content-container">
                <div className="col">
                    <Chart companyData={companyData} />
                </div>
                { (!hasPrediction) ? 
                    (<div className="col" id="no-pred">
                        <div className="card" style={{width: "18rem",
                                                      marginTop: "10px"}}>
                            <div className="card-header">
                                AI Prediction Results:
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"></li>
                                
                            </ul>
                        </div>
                    </div>
                    ) : (
                    <div className="col" id="pred">
                        <div className="card" style={{width: "18rem",
                                                      marginTop: "10px"}}>
                            <div className="card-header">
                                AI Prediction Results:
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Market: {predictionData.market}</li>
                                <li className="list-group-item">Previous Close: ${predictionData.prev_close}</li>
                                <li className="list-group-item">Tomorrows (Predicted) Close: ${predictionData.prediction}</li>
                                <li className="list-group-item">AI Advice: {predictionData.advice}</li>
                            </ul>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )

}
export default Dashboard