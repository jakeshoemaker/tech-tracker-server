import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../Context/Auth'
import { Typography, Divider } from 'antd';
import Chart from '../Chart/Chart'

const Home = () => {
    const { Title, Paragraph, Text, Link } = Typography;
    const context = useAuth();

    if (context === null) {
        return <Redirect to="/login" />
    } else {

        return (
            <div className="home-container">
                <Typography>
                    <Title>Your Dashboard</Title>
                    <Divider></Divider>
                </Typography>
                <Chart />
            </div>
        )
        }
}

export default Home;
