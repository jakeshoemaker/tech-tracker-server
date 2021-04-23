import { useState } from 'react'
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
                            label: `${tempCompany}'s Historical data`,
                            fontSize: 28,
                            data: companyClosingData,
                            backgroundColor: "#ffa39e",
                            borderWidth: 8

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
            <div className="user-input">
                <input type="text" id="comapny-ticker" className="form-control" onChange={(e) => {setTempCompany(e.target.value)}} />
                <label className="form-label" for="company-ticker">Enter Company Ticker</label>
                <Button 
                    variant="dark"
                    onClick={ () => {
                        getChart()
                    }}
                >Search</Button>
                <Chart companyData={companyData} />
            </div>
             
        </div>
    )

}
export default Dashboard