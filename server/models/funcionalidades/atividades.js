import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import Elderly from '../usuários/usuario';
import ActivityType from '../tipos/tipoDeAtividade';

// Define the Activity model
const Activity = sequelize.define('Activity', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  elderly_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Elderly,
      key: 'id',
    },
  },
  activityType_id: {
    type: DataTypes.INTEGER,
    references: {
      model: ActivityType,
      key: 'id',
    },
  },
  activity_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'Activity',
});

export default Activity;
