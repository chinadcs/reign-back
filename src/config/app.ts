import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from '@/routes/routes';

dotenv.config();
const app: Express = express();
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use(routes);
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Done!' });
});
export { app };
