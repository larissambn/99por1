import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config.js';
import DonationRequest from '../pedidos/pedidoDoação.js';

// Define the Review model
const DonationReview = sequelize.define('DonationReview', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  donationRequest_id: {
    type: DataTypes.INTEGER,
    references: {
      model: DonationRequest,
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
  tableName: 'Donation Reviews',
});

export default DonationReview;
