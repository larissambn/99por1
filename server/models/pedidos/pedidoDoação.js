import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import User from '../usuários/usuario';
import Donation from '../funcionalidades/doacao';

// Define the DonationRequest model
const DonationRequest = sequelize.define('DonationRequest', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  donation_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Donation,
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
  tableName: 'Donation_requests',
});

export default DonationRequest;
