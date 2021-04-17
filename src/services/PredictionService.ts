import tf from '@tensorflow/tfjs'
import tfn from '@tensorflow/tfjs-node'
import downloadService from './ServiceHelpers'

export default class PredictionService {
    constructor() {}

    getPredictionValue: (stock: string, daysToPredict: number[]) => Promise<number[]> = async function(stock: string, daysToPredict: number[]) {
        //const json_model = tfn.io.fileSystem(process.cwd() + `\\src\\tensorflow\\${stock}\\model.json`)
        //console.log(json_model)

        // for purposes of testing i am only using amazon model

        const model: tf.LayersModel = await tf.loadLayersModel(process.env.ACCESS_POINT)
        let predictions = []
        // looping through the days and creating predictions
        daysToPredict.forEach( day => {
            const data = tf.tensor1d([day])
            model.predict(data)
            predictions.push(data)
        })
        
        try {
            return predictions
        } catch (err) {
            throw err
        }
    }
}