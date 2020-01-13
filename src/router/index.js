import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.json({ hello: 'Hello Word' }));
router.post('/teste', (req, res) => res.json(req.body));

module.exports = router;
