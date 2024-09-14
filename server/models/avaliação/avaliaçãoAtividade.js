import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import ActivityRequest from '../pedidos/pedidoAtividades';

// Define the Review model
const ActivityReview = sequelize.define('ActivityReview', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  activityRequest_id: {
    type: DataTypes.INTEGER,
    references: {
      model: ActivityRequest,
      key: 'id',
    }
  },
  rating_elderly: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
    allowNull:false
  },
  comment_elderly: {
    type: DataTypes.TEXT,
    allowNull:true
  },
  rating_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
    allowNull:false
  },
  comment_user: {
    type: DataTypes.TEXT,
    allowNull:true
  }
}, {
  timestamps: false,
  tableName: 'Activity Reviews',
});

export default ActivityReview;
