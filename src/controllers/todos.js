class TodosController {

  //Utilizamos o construct ao invez do import direto aqui, pois o codigo nao fica acoplado

  constructor(Todo) {
    this.Todo = Todo;
  };

  get(req, res) {
    return this.Todo.findAll({})
      .then(result => res.send(result))
      .catch( err => res.status(400).send(err.message));
  }

  getById(req, res) {
    return this.Todo.findById(req.params.id)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err.message));
  }

  create(req, res) {
    return this.Todo.create(req.body)
      .then(result => res.send(result))
      .catch(err => res.status(201).send(err.message))
  }

  update(req, res) {
    return this.Todo.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(result => res.send(result))
    .catch(err => res.send(err.message))
  }

  delete(req, res) {
    return this.Todo.destroy({
      where: {
        id: req.params.id
      }
    })
    .then( result => res.sendStatus(204))
    .catch( error => res.status(201).send(error.message));
  }

}

export default TodosController;