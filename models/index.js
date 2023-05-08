import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import process from 'process';
import config from '../config/config.js';
import model from path.join(__dirname, file);


const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = config[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}


const files = fs.readdirSync(__dirname);
for (const file of files) {

  if (file.indexOf('.') === 0 || file === basename || file.slice(-3) !== '.js' || file.indexOf('.test.js') !== -1 || 'db.js' === file) {
    continue;
  }
  const modelInstance = model.default(sequelize, Sequelize.DataTypes);
  db[model.name] = modelInstance;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
