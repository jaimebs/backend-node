import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => res.json({ hello: 'Hello Word' }));
routes.post('/teste', (req, res) => res.json(req.body));

module.exports = routes;
