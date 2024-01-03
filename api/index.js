import express from 'express';
import userRoutes from './routes/routes.js';
import cors from 'cors'

const port = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRoutes);

app.listen(port);
