import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import Elderly from '../usuários/idoso';
import User from '../usuários/usuario';

// Define the Tutor model
const Tutor = sequelize.define('Tutor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  elderly_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Elderly,
      key: 'id',
    },
  },
  dependency: {
    type: DataTypes.STRING,
    allowNull:false
  },
  relationship: {
    type: DataTypes.STRING,
    allowNull:false
  },
  
}, {
  timestamps: false,
  tableName: 'tutors',
});

export default Tutor;
