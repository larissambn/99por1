import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Import the sequelize instance

// Define the User model
const Tutor = sequelize.define('Tutor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  user_type: {
    type: DataTypes.ENUM('representante'),
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
  
  phone: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
    //  isEmail: true, // Validate phone number format
    },
  },

  elderlyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  elderlyEmail: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true, // Ensure email is unique
    validate: {
      isEmail: true, // Validate email format
    },
  },

  elderlyPhone: {
    type: DataTypes.NUMBER,
    allowNull: true,
    validate: {
    //  isEmail: true, // Validate phone number format
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
}, {
  timestamps: false, // Disable automatic timestamp columns (createdAt, updatedAt)
  tableName: 'tutors', // Name of the table in the database
});

export default Tutor;
