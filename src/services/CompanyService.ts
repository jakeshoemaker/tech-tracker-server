import Company, { ICompany } from '../models/Company'
import { ObjectId, DeleteWriteOpResultObject } from 'mongodb'


export default class CompanyService {
    constructor(){}

    // 
    getCompanies: () => Promise<ICompany[]> = async function() {
        try {
            return await Company.find();
        } catch (err) {
            throw err
        }
    }

    getCompany: (id: ObjectId) => Promise<ICompany> = async function(id: ObjectId) {
        try {
            return await Company.findById(id)
        } catch (err) {
            throw err
        }
    }

    deleteCompany: (id: ObjectId) => void = async function(id: ObjectId) {
        try {
            return await Company.findByIdAndDelete(id)
        } catch (err) {
            throw err
        }
    }

    createCompany: (company: ICompany) => Promise<ICompany> = async function (company: ICompany) {
        try {
            // need to write a function that calls the aws lambda gets the prediction
            return await Company.create(company)
        } catch (err) {
            throw err
        }
    }

    updateCompany: (id: ObjectId, changes: Partial<ICompany>) => Promise<ICompany> = async function (id: ObjectId, changes: Partial<ICompany>) {
        try {
            return await Company.findByIdAndUpdate(id, {...changes}, {useFindAndModify:false}).exec()
        } catch (err) {
            throw err
        }
    }


}