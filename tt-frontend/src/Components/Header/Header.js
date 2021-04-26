import React from 'react'
import { PageHeader } from 'antd'
import { Button } from 'react-bootstrap'
import { useAuth } from '../../Context/Auth'
import { Link, Redirect } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    const context = useAuth()

    if ( context !== null ){
       return (
        <div className="page-header">
            <PageHeader
                ghost={false}
                title={<Link to="/"><h2>Tech Tracker</h2></Link>}
                subTitle="Your All-In-One Stock Researcher"
                extra={[
                    <Link to="/login"><Button variant="dark" >Login</Button></Link>
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
                        <Button variant="dark">Welcome {context.userName}</Button>,
                        <Button variant="dark"> Logout </Button>
                    ]}
                />
            </div>
        )
    }
}

export default Header;