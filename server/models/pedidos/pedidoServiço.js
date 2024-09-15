import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import User from '../usuários/usuario';
import Service from '../funcionalidades/servico';

// Define the ServiceRequest model
const ServiceRequest = sequelize.define('ServiceRequest', {
  _id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  service_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Service,
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
    type: DataTypes.ENUM('Requested', 'Pending', 'Approved', 'Denied', 'Finished'),
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
  tableName: 'service_requests',
});

export default ServiceRequest;
