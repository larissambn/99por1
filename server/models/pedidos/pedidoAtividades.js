import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import User from '../usuários/usuario';
import Activity from '../funcionalidades/atividades';

// Define the ActivityRequest model
const ActivityRequest = sequelize.define('ActivityRequest', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  activity_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Activity,
      key: 'id',
    },
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Requested', 'Approved', 'Denied', 'Finished'),
    defaultValue: 'Requested',
    allowNull: false,
  },
  request_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  scheduled_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  completion_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'Activity_requests',
});

export default ActivityRequest;
