import React from 'react'
import { Button, PageHeader } from 'antd'
import './Header.css'



const Header = () => {
    return(
        <div className="page-header">
            <PageHeader
                ghost={false}
                onBack{...()=> window.history.back()}
                title="Tech Tracker"
                subTitle="Your All-In-One Stock Researcher"
                extra={[
                    <Button type="primary">Login</Button>
                ]}            
            ></PageHeader>
        </div>
    )
}

export default Header;