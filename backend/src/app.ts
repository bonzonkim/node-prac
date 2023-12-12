import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors'

const app = express();
const PORT = 3099;

app.use(cors())

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world!')
});
app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome to here')
});

app.listen(PORT, () => {
    console.log(`------------------------Server listening on port ${PORT}------------------------`)
});
