import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()
const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'postgres',
});

async function initialize() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}
export { sequelize, initialize };