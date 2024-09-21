import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config() // For environment variables

// Create a new Sequelize instance and connect to MySQL database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

export default sequelize;
