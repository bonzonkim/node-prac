import express, {Request, Response} from 'express';
import UserController from '../controller/user';

const userRouter = express.Router();

userRouter.get('/hello', (req: Request, res: Response) => {
    res.send('hello from user router');
})
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);

export default userRouter;
