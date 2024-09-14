import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import User from '../usuários/usuario';
import Tutor from '../usuários/representante';

// Define the Elderly model
const Elderly = sequelize.define('Elderly', {
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
  tutor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tutor,
      key: 'id',
    },
  },
  location_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Location',
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'elderly',
});

export default Elderly;
