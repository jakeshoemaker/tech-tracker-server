import React from 'react'


const Info = () => {
    return (
      <div>
        <div className="col-sm" />
        <div className="col">
            <h1> FAQ's</h1>
            <div className="row">
                <div className="col">
                    <h2>What is Tech Tracker?</h2>
                    <ul>
                        <li> <h5>This is a website that provides easy to understand charts about Publically traded stocks.</h5></li>
                        <li> <h4>Using the power of the internet & free market information, this website acts as a medium for your
                            stock researching needs. </h4></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2> How does the AI make it's prediction? </h2>
                    <ul>
                        <li> <h5> The AI is using Machine Learning to make it's prediction. The AI uses a Nueral Network to analyze the
                            closing price of the s&p500 and gives a prediction value of what it thinks the next day's closing price will 
                            be. During testing and Analysis We saw predictions within $30 dollars which comes to a 1% accuracy!</h5></li>
                        <li> <h5> Some new features will include the ability to reasearch other stocks and look further into the future
                            to gain more insight into your investments.</h5></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2> How is advice calculated? </h2>
                    <ul>
                        <li> <h5> Advice is calculated via a simple server-side calculation, it is made by comparing the previous close with
                            the current prediction. The AI will always reccommend: <em> BUY LOW SELL HIGH</em> </h5></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-xs" />
      </div>
    )
}

export default Info