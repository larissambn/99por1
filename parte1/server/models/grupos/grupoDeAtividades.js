import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config.js';

// Define the ActivtyCategory model
const ActivityCategory = sequelize.define('ActivityCategory', {
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
  tableName: 'activity_categories',
});

export default ActivityCategory;