import { Request, Response } from 'express'
import { ICompany } from '../models/Company'
import CompanyService from '../services/CompanyService'
import { ObjectId } from 'mongodb'

const service = new CompanyService()

const createCompanyController:(req:Request, res:Response) => void = async(req: Request, res: Response) => {
    // check body
    if (req.body) {
        const company:ICompany = req.body
        await service.createCompany(company)
        res.status(200).json("success, company created in database")
    } else {
        res.status(400).send("Error! Cannot create company")
    }
    
}

const getCompaniesController:(req:Request, res:Response) => void = async(req: Request, res: Response) => {
    if (req) {
        const companies = await service.getCompanies()
        res.status(200).json(companies)
    } else {
        res.status(400).send("error fetching companies")
    }
}

const getCompanyByIdController:(req: Request, res: Response) => void = async(req:Request, res: Response) => {
    if (req.body) {
        const id: ObjectId = new ObjectId(req.params.id)
        const company = await service.getCompany(id)
        res.status(200).json(company)
    } else {
        res.status(400).send("could not find company")
    }
}

export default {
    createCompany: createCompanyController,
    getCompanyById: getCompanyByIdController,
    getAllCompany: getCompaniesController
}