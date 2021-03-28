import { Schema, Document, model } from 'mongoose'

export interface ICompany extends Document {
  name: string,
  symbol: string,
  historical_data: {
    closing_price : Array<number>,
    date : string
  },
  prediction_data: {
    closing_price: Array<number>,
    date: string
  }
}

const CompanySchema: Schema = new Schema<ICompany>({
  name: {type:String, required:true, unique:false},
  symbol: {type:String, required:true, unique:true},
  historical_data: {
    closing_price: [{type:Number, required:false}],
    date: [{type:String, required:false}]
  },
  prediction_data: {
    closing_price: [{type:Number, required:false}],
    date: [{type:String, required:false}]
  }
})

export default model<ICompany>('Company', CompanySchema)
