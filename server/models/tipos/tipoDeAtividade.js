import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import ActivityCategory from '../grupos/grupoDeAtividades';

// Define the ActivityType model
const ActivityType = sequelize.define('ActivityType', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ActivityType_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: ActivityCategory,
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'activity_types',
});

export default ActivityType;
