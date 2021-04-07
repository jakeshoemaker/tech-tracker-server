import { Router, Request, Response } from 'express'
import UserController from '../controllers/UserController'
import CompanyController from '../controllers/CompanyController'

const router: Router = Router();
export const noAuthRoutes = [
    '/api/v1/login',
    '/',
    '/api/v1/users/newuser'
]

router.get('/', (req: Request, res: Response) => {
    res.send('Server running')
})

router.get('/api/v1/', (req: Request, res: Response) => {
    res.send('surprise its a easter egg! just kidding its an API!')

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

/*

            INCOMING

	auth:			( express router, uses controllers to call services )
	    /login	validate jwt
	user:
	    .get /users/:id	get user
	    .post /users/new	create user
            .put /users/:id	update user
	    .delete /users/:id	delete user

	company:
	    .get /company		 gets companys
	    .get /company/:id		 get specific company
	    .get /company/:id/prediction get prediction from model
*/

export default router
