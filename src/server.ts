import express, { Application } from 'express';
import routes from './routes';
import { config } from 'dotenv';

config(); // enables dotenv

const app: Application = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});