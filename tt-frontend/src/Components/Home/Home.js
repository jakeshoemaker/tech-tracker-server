import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../Context/Auth'
import { Typography, Divider } from 'antd';
import Dashboard from '../Dashboard/Dashboard'

const Home = () => {
    const { Title } = Typography;
    const context = useAuth();

    if (context === null) {
        return <Redirect to="/login" />
    } else {

    return (
        <div className="home-container">
            <Dashboard />
        </div>
      )
    }
}

export default Home;
