import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config.js'; // Import the sequelize instance

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  user_type: {
    type: DataTypes.ENUM('idoso', 'usuario','representante'),
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure email is unique
    validate: {
      isEmail: true, // Validate email format
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  location_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Location',
      key: 'id',
    },
  },

  socialMedia_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },

}, {
  timestamps: false, // Disable automatic timestamp columns (createdAt, updatedAt)
  tableName: 'users', // Name of the table in the database
});

export default User;
