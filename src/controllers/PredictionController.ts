import { Request, Response } from 'express'
import PredictionService from '../services/PredictionService'

const service = new PredictionService()

const getPredictionController: (req: Request, res: Response) => void = async(req: Request, res: Response) => {
    // check body
    if (req.body) {
        const stock: string = req.body.stock
        const days: number[] = req.body.days
        const prediction = await service.getPredictionValue(stock, days)
        res.status(200).json(prediction)
    } else {
        res.status(400).send("Error predicting prices. Check logs for more info")
    }
}

export default {
    getPrediction: getPredictionController
}