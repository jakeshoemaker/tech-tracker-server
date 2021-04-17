// the intent of this service is to download the data and THEN call the lambda script which cleans the data 
// that way after I can grab the data and call another lambda to perform analytics on data

// TODO 
/* 

    0. this function will recieve a symbol for a company
    1. scrape historical data from yahoo.com
        - scrape data
        - data processing so that way it sends only the closing/date, symbol, and name
    2. create lambda function to clean, and insert data into mongoDB
    
    3. create a prediction lambda

*/ 