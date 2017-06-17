import express from 'express';
import TodosController from '../controllers/todos';
import database from '../config/database';

const iDatabase = database();

const router = express.Router();

const todosController = new TodosController(iDatabase.models.Todos);

router.get('/', (req, res) => todosController.get(req, res));
router.get('/:id', (req, res) => todosController.getById(req, res));
router.post('/', (req, res) => todosController.create(req, res));
router.put('/:id', (req, res) => todosController.update(req, res));

export default router;