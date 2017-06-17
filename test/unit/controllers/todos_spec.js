import TodosController from '../../../src/controllers/todos';
import sinon from 'sinon';
import Todos from '../../../src/models/todos';

describe('Controllers: Todos', () => {

  const todosDefault = [{
    id: 1,
    description: 'todo teste',
    completed: false
  }];

  describe('get() todos', () => {
    it('should call send with a list of todos', () => {

      const request = {};

      const response = {
        send: sinon.spy()
      }

      Todos.findAll = sinon.stub();

      Todos.findAll.withArgs({}).resolves(todosDefault);

      const todosController = new TodosController(Todos);

      return todosController.get(request, response)
        .then( () => {
          sinon.assert.calledWith(response.send, todosDefault);
        });

    });

    it('shoul return 400 when an error occurs', () => {

      const request = {}

      const response = {
        send: sinon.spy(),
        status: sinon.stub()
      }

      response.status.withArgs(400).returns(response);

      Todos.findAll = sinon.stub();
      Todos.findAll.withArgs({}).rejects({message: 'Error'});

      const todosController = new TodosController(Todos);

      return todosController.get(request, response)
        .then( () => {
          sinon.assert.calledWith(response.send, 'Error')
        });
    });
  });


});