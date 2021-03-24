import mongoose from "mongoose"

const connectDb = (app : any) =>{
  const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
  }

  const connectWithRetry = () => {
    mongoose.Promise = global.Promise
    console.log("MongoDB connection with retry")
    mongoose
      .connect(process.env.MONGODB_URI, options)
      .then(() => {
        console.log("MongoDB is connected")
        app.emit("ready")
      })
      .catch((err: Error) => {
        console.log("MongoDB connection unsuccessful, retry after 2 seconds. Error: {0}", err)
        setTimeout(connectWithRetry, 2000)
      })
  }
  connectWithRetry()
}

export default connectDb