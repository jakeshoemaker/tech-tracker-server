### Docker help

Working on writing up a docker trouble shoot. 


### Mongo Connection Help

The following is a code snippet to help with connection to the mongo db. If you want to use this code you can host a free tier database on MongoDB atlas here:
https://cloud.mongodb.com

``` const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://<user>:<password>@<db-name>.cpvag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
```
