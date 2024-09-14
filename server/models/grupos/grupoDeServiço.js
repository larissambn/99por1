import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';

// Define the ServiceCategory model
const ServiceCategory = sequelize.define('ServiceCategory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'service_categories',
});

export default ServiceCategory;