import express, {Request, Response} from 'express';

const userRouter = express.Router();

userRouter.get('/hello', (req: Request, res: Response) => {
    res.send('hello from user router');
})
export default userRouter;
