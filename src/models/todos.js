export default (sequelize, DataType) => {
  
  const Todos = sequelize.define('Todos', {
    id:{
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    completed: {
      type: DataType.BOOLEAN,
      defaultValue: false
    }
  });

  return Todos;
}