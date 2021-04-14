import tf from '@tensorflow/tfjs'
import downloadService from './ServiceHelpers'

export default class PredictionService {
    constructor() {}

    getPredictionValue: (stock: string, daysToPredict: number[]) => Promise<number[]> = async function(stock: string, daysToPredict: number[]) {
        const json_model = downloadService.getModel(stock)
        const model = await tf.loadLayersModel(json_model)
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