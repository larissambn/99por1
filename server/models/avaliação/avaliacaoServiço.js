import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config';
import Service from '../funcionalidades/servico';
import User from '../usuários/usuario';

// Define the Review model
const ServiceReview = sequelize.define('ServiceReview', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  service_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Service,
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
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
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
  tableName: 'Service Reviews',
});

export default ServiceReview;
