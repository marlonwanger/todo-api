import Sequelize from 'sequelize';
import dbconfig from './dbconfig';
import fs from 'fs';
import path from 'path';

let database = null;

const loadModels = (sequelize) => {
  const dir = path.join(__dirname,'../models');
  let models = [];
  fs.readdirSync(dir).forEach( (file) => {
    const modelDir = path.join(dir,file);
    const model = sequelize.import(modelDir);
    models[model.name] = model;
  });
  return models;
};

export default () => {

  if(!database) {

    const sequelize = new Sequelize(
      dbconfig.database,
      dbconfig.username,
      dbconfig.password,
      dbconfig.params
    );

    database = {
      sequelize,
      Sequelize,
      models: {}
    }

    database.models = loadModels(sequelize);

    sequelize.sync().done( () => {
      return database;
    });

  }

  return database;
}