import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import ServiceCategory from '../grupos/grupoDeServiço';

// Define the ServiceType model
const ServiceType = sequelize.define('ServiceType', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ServiceType_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: ServiceCategory,
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'service_types',
});

export default ServiceType;
