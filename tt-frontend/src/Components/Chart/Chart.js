import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Button } from 'antd'
import axios from 'axios'

const Chart = () => {
    const [company, setCompany] = useState()
    const [companyData, setCompanyData] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const ticker = 'AAPL'

    const getData = () => {
        axios.get("https://www.quandl.com/api/v3/datasets/EOD/AAPL.json?api_key=GET_YOUR_OWN_API&collapse=annual&column_index=4")
        .then(res => {
            if (res.status === 200) {
                //setCompanyData(res.data.dataset.data)
                return res.data.dataset.data
            } else {
                console.error("error")
                return []
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const prepareData = async () => {
        var data = await getData()
        const clean_data = data.map(function(d) {
            return  {
                "date": d[0], 
                "closing": d[1]
            }
        })
        console.log(clean_data)
        return clean_data
    }

    useEffect(() => {
        (async () => {
            setDataLoaded(false)
            setCompanyData(prepareData()) 
        }) ()
    }, [companyData])
    
    //const DUMMY_DATA = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
    return (
        <div>
            {dataLoaded ? (
                <LineChart width={800} height={400} data={companyData}>
                    <Line type="monotone" dataKey="closing_price"stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                </LineChart>
            ) : (
                <h1> could not load the data, please try again</h1>
            )}
        </div>
    )
}

export default Chart