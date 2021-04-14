import aws from 'aws-sdk'
import fs from 'fs'

const downloadModelFromS3: (stock: string) => string = (stock:string) => {
        const path = `../tensorflow/json/${stock}.json`
        let s3 = new aws.S3()

        const params = {
            Bucket: process.env.BUCKET,
            Key: process.env.AWS_SECRET_ACCESS_KEY
        }
        s3.getObject(params, (err, data) => {
            if (err) console.error(err)
            fs.writeFileSync(path, data.Body.toString())
            console.log(`${path} has been created. You may now convert the json into a tfjs model`)
        })

        return path
}

export default {
    getModel: downloadModelFromS3
}