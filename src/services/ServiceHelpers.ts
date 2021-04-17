import aws from 'aws-sdk'
import fs from 'fs'

// SERVICE MACHINE BROKE IDK IF ILL FIX LOLZ

const downloadModelFromS3: (stock: string) => Promise<string> = async function (stock:string) {
        const path = `./tensorflow/json/${stock}.json`
        let s3 = new aws.S3({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY
        })

        const params = {
            Bucket: process.env.BUCKET,
            Key: `${stock}/model.json`
        }
        s3.getObject(params, (err, data) => {
            if (err) console.error(err)
            fs.mkdirSync(path)
            fs.writeFileSync(path, data.Body.toString())
            console.log(`${path} has been created. You may now convert the json into a tfjs model`)
        })

        return path
}

export default {
    getModel: downloadModelFromS3
}