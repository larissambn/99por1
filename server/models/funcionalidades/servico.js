
import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import Elderly from '../usuários/usuario';
import ServiceType from '../tipos/tipoDeServiço';

// Define the Service model
const Service = sequelize.define('Service', {
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
  type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: ServiceType,
      key: 'id',
    },
  },
  Service_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  max_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  min_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  experience: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  knowledge: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reference: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  timestamps: false,
  tableName: 'services',
});

export default Service;
