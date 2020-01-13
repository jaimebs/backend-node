import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import router from './router';

const app = express();

// Permite acesso externo
app.use(cors());
// Desativa o X-Powered-By: Express
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port: ${process.env.PORT}`));
