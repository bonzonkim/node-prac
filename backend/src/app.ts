import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors'
import userRouter from "../routes/user";
const app = express();
const PORT = 3099;

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/user',userRouter);

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome to here')
});

app.listen(PORT, () => {
    console.log(`------------------------Server listening on port ${PORT}------------------------`)
});
