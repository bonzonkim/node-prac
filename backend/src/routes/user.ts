import express, {Request, Response} from 'express';
import { register, login } from '../controller/user';

const userRouter = express.Router();
//const userController = new UserController();

userRouter.get('/hello', (req: Request, res: Response) => {
    res.send('hello from user router');
})
userRouter.post('/register', register);
userRouter.post('/login', login);

export default userRouter;
