import express, { Request, Response, NextFunction} from 'express';


const app = express();

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world!')
});

app.listen('3000', () => {
    console.log("Server listening on port: 3000")
});
