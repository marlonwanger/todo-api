import express from 'express';
import todosRoute from './todos.js';

const router = express.Router();

router.use('/todos', todosRoute);

router.get('/', (req, res) => res.send('Index ROUTER'));

export default router;