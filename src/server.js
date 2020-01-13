import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const app = express();

// Permite acesso externo
app.use(cors());
// Desativa o X-Powered-By: Express
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port: ${process.env.PORT}`));
