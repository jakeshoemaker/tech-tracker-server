import React from 'react'
import { PageHeader } from 'antd'
import { useAuth } from '../../Context/Auth'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    const context = useAuth()

    if ( context !== null ){
       return (
        <div className="page-header">
            <PageHeader
                ghost={false}
                title="Tech Tracker"
                subTitle="Your All-In-One Stock Researcher"
                extra={[
                    <Link to="/login">Login</Link>
                ]}            
            />
        </div>
       )
    } else {
        return (
            <div className="page-header" >
                <PageHeader
                    ghost={false}
                    title="Tech Tracker"
                    subTitle="Your All-In-One Stock Researcher"
                    extra={[
                        <h5>Welcome User</h5>
                    ]}
                />
            </div>
        )
    }
}

export default Header;