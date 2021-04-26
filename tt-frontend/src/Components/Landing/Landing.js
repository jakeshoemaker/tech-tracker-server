import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Landing = () => {
    return (
        <div className="container-fluid text-center">
            <h1>this is my landing page</h1>
            <Link to="/dashboard"><Button> research stocks</Button></Link>
        </div>
    )
}

export default Landing;