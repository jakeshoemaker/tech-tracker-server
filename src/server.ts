import app from './app'
import {connectDB, disconnectDB} from '../db/db'

const PORT = process.env.PORT


app.listen(PORT, async ()=> {
    await connectDB(process.env.MONGODB_URI)
    console.log(`Server is running on http://localhost:${PORT}`)
})

process.on('SIGINT', async () => {
    await disconnectDB()
    process.exit(0)
})
