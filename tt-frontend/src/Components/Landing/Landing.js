import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './Landing.css'


const Landing = () => {
    return (
        <div id="container">
            <div id="landing-content-container">
               
                <Row id="content-row">
                    <Col ><h1 style={{
                        fontSize: "70px",
                        fontWeight: "bolder"
                        }}> Tech <span id="title">Tracker </span></h1></Col>
                </Row>
                <Row>
                    <Col ><p style={{
                            fontSize: "20px",
                            padding: "25px 100px 25px 100px"
                            }}>Tech Tracker is a website that makes sense of the terrabytes of financial data that is in our world today!
                        Using the power of Machine Learning, Tech Tracker provides predictions of top markets like
                         the: S&P500, Nasdaq, and New York Stock exchange 
                            </p></Col>
                </Row>
                <Link to="/info"> 
                    <Button 
                    variant="outline-dark"
                    size="lg"
                    >Learn More
                    </Button>
                </Link>
                <span style={{paddingRight: "10px"}}/>
                <Link to="/dashboard">
                    <Button
                    variant="outline-danger"
                    size="lg"
                    >Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;


/*

    <div className="landing-main">
        <Container fluid >
            <Col>
                <Row >
                    <Col />
                    <Col> <h1 className="title">Tech Tracker</h1> </Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <h4> stock researching made easy.</h4>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <h6>Tech Tracker is a website that makes sense of the terrabytes of financial data that is in our world today!
                        Using the power of Machine Learning, Tech Tracker provides predictions of top markets like the: S&P500, Nasdaq, and New York Stock exchange
                    </h6>
                    <Col />
                </Row>
            </Col>
            <div className="container-fluid">
            <Link to="/info">
                <Button 
                    className="info-button"
                    variant="outline-danger"
                    style={{ margin: "10px" }}
                >learn more
                </Button>
            </Link>
            <Link to="/dashboard">
                <Button 
                    className="research-button"
                    variant="outline-danger"
                > research stocks
                </Button>
            </Link>
            </div>
        </Container>
    </div>

*/