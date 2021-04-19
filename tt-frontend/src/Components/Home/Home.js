import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../Context/Auth'
import { Typography, Divider } from 'antd';

const Home = () => {
    const { Title, Paragraph, Text, Link } = Typography;
    const context = useAuth();

    if(context === null) {
        return <Redirect to="/login" />
    }

    return (
        <Typography>
            <Title>Tech-Tracker</Title>
            <Paragraph>
                Tech-Tracker is a finacial tool that allows a user to utilize the power
                of machine learning and artificial intelligence to view predictions as well
                as historical data of Top traded stocks and Crypto currencies!
            </Paragraph>
        </Typography>
    )
}

export default Home;
