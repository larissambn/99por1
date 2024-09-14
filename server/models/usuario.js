import { DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Import the sequelize instance

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  user_type: {
    type: DataTypes.ENUM('idoso', 'usuario'),
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
    allowNull: true,
    validate: {
    //  isEmail: true, // Validate phone number format
    },
  },

  state: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
    //  isEmail: true, // Validate phone number format
    },
  },

  city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
    //  isEmail: true, // Validate phone number format
    },
  },
  
  neighborhood: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
    //  isEmail: true, // Validate phone number format
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

 

//   created_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
// },
}, {
  timestamps: false, // Disable automatic timestamp columns (createdAt, updatedAt)
  tableName: 'users', // Name of the table in the database
});

export default User;
