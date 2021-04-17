import { Router, Request, Response } from 'express'
import UserController from '../controllers/UserController'
import CompanyController from '../controllers/CompanyController'
import PredictionController from '../controllers/PredictionController'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Server running')
})

router.get('/api/v1/', (req: Request, res: Response) => {
    res.send('API IS UP')

})

// USER ROUTES
router.post('/api/v1/users/new', UserController.createUser)
router.get('/api/v1/users', UserController.readUser)
router.put('/api/v1/users/:id/update', UserController.updateUser)
router.delete('/api/v1/users/:id' , UserController.deleteUser)

// COMPANY ROUTES
router.get('/api/v1/comp/all', CompanyController.getAllCompany)
router.get('/api/v1/comp/:id', CompanyController.getCompanyById)
router.post('/api/v1/comp/new', CompanyController.createCompany)

// PREDICTION ROUTES
router.get('/api/v1/predict', PredictionController.getPrediction)

export default router
