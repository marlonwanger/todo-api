describe('Routes: Todos', () => {

  const Todos = app.database.models.Todos;

  const todoDefault = {
    id: 1,
    description: 'todo teste',
    completed: false
  };

  beforeEach( done => {
    Todos
      .destroy({ where:{} })
      .then( () => Todos.create(todoDefault) )
      .then( () => {
        done();
      })
  });

  describe('GET /todos', () => {
    it(' Should return a list of todos', done => {
      request
        .get('/todos')
        .end( (err, res) => {  //Ao acessar a rota , recebemos um error ou uma resposta
          expect(res.body[0].id).to.be.eql(todoDefault.id);
          expect(res.body[0].description).to.be.eql(todoDefault.description);
          expect(res.body[0].completed).to.be.eql(todoDefault.completed);
          done(err);
        });
    });
  });

  describe('GET /todos/{id}', () => {
    it('should return a todo', done => {
      request
        .get('/todos/1')
        .end( (err, res) => {
          expect(res.body.id).to.be.eql(todoDefault.id);
          expect(res.body.description).to.be.eql(todoDefault.description);
          expect(res.body.completed).to.be.eql(todoDefault.completed);
          done(err);
        });
    });
  });

  describe('POST /todo', () => {
    it('should create a todo', done => {
      
      const newTodo = {
        id: 2,
        description: 'todo create',
        completed: true
      };
      
      request
        .post('/todos')
        .send(newTodo)
        .end( (err, res) => {
          expect(res.body.id).to.be.eql(newTodo.id);
          expect(res.body.description).to.be.eql(newTodo.description);
          expect(res.body.completed).to.be.eql(newTodo.completed);
          done(err);
        });
    });
  });

  describe('PUT /todo/{id}', () => {
    it('should update a todo', done => {
      const updateTodo = {
        id: 1,
        description: 'todo updated',
        completed: true
      }

      request
        .put('/todos/1')
        .send(updateTodo)
        .end( (err, res) => {
          expect(res.body).to.be.eql([1]);
          done(err);
        });
    });
  });

  describe('DELETE /todos/1', () => {
    it('shoul delete a todo', done => {

      request
        .delete('/todos/1')
        .end( (err, res) => {
          expect(res.statusCode).to.be.eql(204); //204 = no content
          done(err);
        })

    });
  });


});