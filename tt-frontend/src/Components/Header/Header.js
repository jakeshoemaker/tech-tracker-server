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
                title={<Link to="/"><h1 style={{fontWeight: "bolder"}}>T <span style={{ paddingRight: "5px"}}>T</span>  </h1></Link>}
                subTitle="Your All-In-One Stock Researcher"
                extra={[
                    <Link to="/info"><Button variant="outline-dark" >info</Button></Link>,
                    <Link to="/dashboard"><Button variant="outline-dark" >dashboard</Button></Link>,
                    <a href="https://github.com/jakeshoemaker/tech-tracker-server"><Button variant="outline-dark" >github</Button></a>
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
                        <Button variant="danger">Welcome {context.userName}</Button>,
                        <Button variant="danger"> Logout </Button>
                    ]}
                />
            </div>
        )
    }
}

export default Header;